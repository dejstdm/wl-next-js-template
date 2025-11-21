const ALLOWED_COMPONENTS = [
  'NavBar',
  'Footer', 
  'Hero',
  'TextSection',
  'ImageSection',
  'ProductSlider',
  'RecipeSlider',
  'FAQ',
  'SocialMediaFeed'
];

// Next.js built-ins that are allowed
const ALLOWED_NEXT_JS = ['Image', 'Link', 'Script', 'Head'];
const ALLOWED_HTML_ELEMENTS = ['html', 'body', 'head', 'title', 'meta', 'link', 'script', 'style'];

// Only these specific layout components are allowed (they just wrap children)
const ALLOWED_LAYOUT_COMPONENTS = ['RootLayout', 'SiteLayout'];

const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce usage of only @dejstdm/white-label-ui components',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      invalidImport: 'Component "{{name}}" is not exported from @dejstdm/white-label-ui. Allowed components: {{allowed}}',
      customComponent: 'Custom React component "{{name}}" is not allowed. Use components from @dejstdm/white-label-ui instead.',
      htmlAsComponent: 'HTML element <{{tag}}> is not allowed as a UI component. Use components from @dejstdm/white-label-ui instead.',
      forbiddenImport: 'Importing from "{{source}}" is not allowed. Only import UI components from @dejstdm/white-label-ui.',
      dynamicComponent: 'Dynamic component access is not allowed. Use components directly from @dejstdm/white-label-ui.',
      reactCreateElement: 'React.createElement() is not allowed. Use JSX syntax with components from @dejstdm/white-label-ui.',
      memberExpressionComponent: 'Component access via member expression (components[name]) is not allowed. Use components directly.',
    },
    schema: [],
  },
  create(context) {
    const importedComponents = new Set();
    const customComponents = new Set();
    
    // Helper function to check if file is a Next.js page or layout component
    const isPageOrLayoutFile = () => {
      const filename = context.getFilename();
      return filename.endsWith('page.tsx') || 
             filename.endsWith('page.ts') || 
             filename.endsWith('layout.tsx') || 
             filename.endsWith('layout.ts');
    };

    return {
      // Check imports from @dejstdm/white-label-ui
      ImportDeclaration(node) {
        const source = node.source.value;
        
        // Check imports from white-label-ui package
        if (source === '@dejstdm/white-label-ui') {
          node.specifiers.forEach(spec => {
            let componentName;
            
            if (spec.type === 'ImportSpecifier') {
              componentName = spec.imported?.name || spec.local?.name;
            } else if (spec.type === 'ImportDefaultSpecifier') {
              componentName = spec.local?.name;
            } else if (spec.type === 'ImportNamespaceSpecifier') {
              // import * as UI from '@dejstdm/white-label-ui' - not allowed
              context.report({
                node: spec,
                messageId: 'invalidImport',
                data: {
                  name: '*',
                  allowed: ALLOWED_COMPONENTS.join(', '),
                },
              });
              return;
            }

            if (componentName && !ALLOWED_COMPONENTS.includes(componentName)) {
              context.report({
                node: spec,
                messageId: 'invalidImport',
                data: {
                  name: componentName,
                  allowed: ALLOWED_COMPONENTS.join(', '),
                },
              });
            } else if (componentName) {
              importedComponents.add(componentName);
            }
          });
        }
        
        // Check for imports from other UI libraries
        if (source.includes('@mui') || 
            source.includes('@chakra-ui') || 
            source.includes('antd') ||
            source.includes('react-bootstrap') ||
            (source.startsWith('@') && source.includes('/ui'))) {
          context.report({
            node: node.source,
            messageId: 'forbiddenImport',
            data: { source },
          });
        }
      },

      // Catch React.createElement() calls
      'CallExpression[callee.type="MemberExpression"][callee.object.name="React"][callee.property.name="createElement"]'(node) {
        const firstArg = node.arguments[0];
        
        // Check if first argument is a string (HTML element) or not an allowed component
        if (firstArg) {
          if (firstArg.type === 'StringLiteral') {
            const tagName = firstArg.value;
            // Allow only basic HTML structure elements
            if (!ALLOWED_HTML_ELEMENTS.includes(tagName.toLowerCase()) && 
                !ALLOWED_NEXT_JS.includes(tagName)) {
              context.report({
                node,
                messageId: 'reactCreateElement',
              });
            }
          } else if (firstArg.type === 'Identifier') {
            const componentName = firstArg.name;
            // If it's not an allowed component, report it
            if (!ALLOWED_COMPONENTS.includes(componentName) && 
                !ALLOWED_NEXT_JS.includes(componentName) &&
                !ALLOWED_LAYOUT_COMPONENTS.includes(componentName)) {
              context.report({
                node,
                messageId: 'reactCreateElement',
              });
            }
          } else {
            // Dynamic or computed - not allowed
            context.report({
              node,
              messageId: 'reactCreateElement',
            });
          }
        }
      },

      // Catch dynamic component access: components[name], Comp[name], etc.
      'MemberExpression[computed=true]'(node) {
        // Check if it's accessing a component dynamically
        if (node.object.type === 'Identifier') {
          const objectName = node.object.name;
          
          // Catch patterns like: components[name], Comp[name], UI[name]
          if (objectName === 'components' || 
              /^[A-Z]/.test(objectName) || 
              objectName === 'UI') {
            // Check if parent is JSX or used as component
            let parent = node.parent;
            while (parent) {
              if (parent.type === 'JSXOpeningElement' || 
                  parent.type === 'CallExpression') {
                context.report({
                  node,
                  messageId: 'memberExpressionComponent',
                });
                break;
              }
              parent = parent.parent;
            }
          }
        }
      },

      // Catch JSX with dynamic component names: <components[name] />
      'JSXOpeningElement[name.type="MemberExpression"]'(node) {
        if (node.name.computed === true) {
          // <components[name] /> or <Comp[name] />
          context.report({
            node,
            messageId: 'dynamicComponent',
          });
        } else if (node.name.object) {
          // <UI.Button /> or similar
          const objectName = node.name.object.name;
          if (objectName === 'components' || objectName === 'UI' || /^[A-Z]/.test(objectName)) {
            context.report({
              node,
              messageId: 'memberExpressionComponent',
            });
          }
        }
      },

      // Catch variable assignments that create component maps/objects
      'VariableDeclarator[init.type="ObjectExpression"]'(node) {
        if (node.id.type === 'Identifier') {
          const varName = node.id.name;
          
          // Catch: const components = { Button: ..., Card: ... }
          if (varName === 'components' || varName === 'UI' || /^[A-Z]/.test(varName)) {
            // Check if object has component-like properties
            const hasComponentProps = node.init.properties.some(prop => {
              if (prop.key) {
                const keyName = prop.key.name || prop.key.value;
                return /^[A-Z]/.test(keyName);
              }
              return false;
            });
            
            if (hasComponentProps) {
              context.report({
                node,
                messageId: 'dynamicComponent',
              });
            }
          }
        }
      },

      // Check for custom React component definitions
      'FunctionDeclaration[id.name=/^[A-Z]/]'(node) {
        const componentName = node.id.name;
        
        // Allow Next.js page and layout components (export default function in page.tsx/layout.tsx)
        if (isPageOrLayoutFile()) {
          // Check if this is an export default function (Next.js page/layout pattern)
          const isExportDefault = node.parent?.type === 'ExportDefaultDeclaration';
          if (isExportDefault) {
            return; // Allow export default function in page/layout files
          }
        }
        
        // Only allow specific Next.js layout components
        if (ALLOWED_LAYOUT_COMPONENTS.includes(componentName)) {
          // Verify it only wraps children and uses allowed components
          return;
        }

        // Check if it returns JSX
        const returnsJSX = node.body.body.some(stmt => {
          if (stmt.type === 'ReturnStatement' && stmt.argument) {
            return stmt.argument.type === 'JSXElement' || 
                   stmt.argument.type === 'JSXFragment';
          }
          return false;
        });

        if (returnsJSX && !ALLOWED_COMPONENTS.includes(componentName)) {
          customComponents.add(componentName);
          context.report({
            node: node.id,
            messageId: 'customComponent',
            data: { name: componentName },
          });
        }
      },

      // Check for arrow function components
      'VariableDeclarator[init.type="ArrowFunctionExpression"]'(node) {
        if (node.id.type === 'Identifier' && /^[A-Z]/.test(node.id.name)) {
          const componentName = node.id.name;
          
          // Allow Next.js page and layout components (export default const in page.tsx/layout.tsx)
          if (isPageOrLayoutFile()) {
            // Check if this is an export default const (Next.js page/layout pattern)
            const isExportDefault = node.parent?.parent?.type === 'ExportDefaultDeclaration';
            if (isExportDefault) {
              return; // Allow export default const in page/layout files
            }
          }
          
          // Skip allowed components
          if (ALLOWED_COMPONENTS.includes(componentName) || 
              ALLOWED_LAYOUT_COMPONENTS.includes(componentName)) {
            return;
          }

          // Check if it returns JSX
          const arrowFunc = node.init;
          if (arrowFunc.body.type === 'JSXElement' || 
              arrowFunc.body.type === 'JSXFragment' ||
              (arrowFunc.body.type === 'BlockStatement' && 
               arrowFunc.body.body.some(stmt => 
                 stmt.type === 'ReturnStatement' && 
                 (stmt.argument?.type === 'JSXElement' || 
                  stmt.argument?.type === 'JSXFragment')
               ))) {
            customComponents.add(componentName);
            context.report({
              node: node.id,
              messageId: 'customComponent',
              data: { name: componentName },
            });
          }
        }
      },

      // Check JSX elements - only allow white-label-ui components or Next.js built-ins
      JSXOpeningElement(node) {
        const tagName = node.name.name;
        const tagNameLower = tagName?.toLowerCase();

        // Allow Next.js built-ins
        if (ALLOWED_NEXT_JS.includes(tagName)) {
          return;
        }

        // Allow HTML elements in specific contexts (html, body, etc.)
        if (ALLOWED_HTML_ELEMENTS.includes(tagNameLower)) {
          return;
        }

        // Allow fragments
        if (tagName === 'Fragment' || tagName === null) {
          return;
        }

        // Allow only specific layout components
        if (ALLOWED_LAYOUT_COMPONENTS.includes(tagName)) {
          return;
        }

        // Allow lowercase HTML elements that are not styled (basic HTML structure)
        // But check if they have className or style - if so, they're being used as components
        if (tagNameLower && tagName === tagNameLower) {
          const hasClassName = node.attributes.some(
            attr => attr.name?.name === 'className' || attr.name?.name === 'style'
          );
          
          // Forbidden HTML elements when used as components
          const forbiddenHtmlElements = ['button', 'div', 'section', 'article', 'header', 'footer', 'nav', 'aside', 'main'];
          
          if (forbiddenHtmlElements.includes(tagNameLower) && hasClassName) {
            context.report({
              node,
              messageId: 'htmlAsComponent',
              data: { tag: tagNameLower },
            });
          }
          // Also catch any HTML element with className/style (stricter)
          if (hasClassName && !ALLOWED_HTML_ELEMENTS.includes(tagNameLower)) {
            context.report({
              node,
              messageId: 'htmlAsComponent',
              data: { tag: tagNameLower },
            });
          }
          return;
        }

        // Check if it's an allowed component
        if (tagName && !ALLOWED_COMPONENTS.includes(tagName)) {
          // Check if it's a custom component we already flagged
          if (customComponents.has(tagName)) {
            return; // Already reported
          }

          // Check if it's imported from white-label-ui
          if (!importedComponents.has(tagName)) {
            // It might be a custom component or from another library
            context.report({
              node,
              messageId: 'customComponent',
              data: { name: tagName },
            });
          }
        }
      },
    };
  },
};

// Export for ESLint flat config
export default {
  rules: {
    'only-white-label-components': rule,
  },
};

