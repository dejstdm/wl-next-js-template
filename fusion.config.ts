import { defineAgent } from '@builder.io/fusion';

export default defineAgent({
  name: 'white-label-ui-agent',
  designSystem: {
    path: './node_modules/@dejstdm/white-label-ui',
    components: './node_modules/@dejstdm/white-label-ui/dist/white-label-ui.js',
    metadata: './node_modules/@dejstdm/white-label-ui/dist/meta/*.meta.js',
  },
  constraints: { 
    maxDepth: 6, 
    allowedCategories: ['layout', 'display', 'navigation'],
    disallowRawHtml: true 
  },
  guidance: {
    brandVoice: 'clean, modern, minimal - STRICT RULE: ONLY use components from @dejstdm/white-label-ui metadata. NEVER create Button, Modal, Card, Table, or any custom components.',
    layoutGoals: ['balanced whitespace', 'clear hierarchy', 'ONLY use components from metadata files - NO custom components'],
    a11yGoals: ['focus-visible', 'sufficient contrast', 'semantic headings'],
    instructions: `
🚫🚫🚫 HARD STOP - SYSTEM ENFORCEMENT REQUIRED 🚫🚫🚫

BEFORE GENERATING ANY CODE, YOU MUST CHECK:

1. Is the requested component in this EXACT list?
   - NavBar (navigation)
   - Footer (navigation)
   - Hero (layout)
   - TextSection (display)
   - ImageSection (display)
   - ProductSlider (display)
   - RecipeSlider (display)
   - FAQ (display)
   - SocialMediaFeed (display)

2. Is it in the metadata files at dist/meta/*.meta.js?

IF THE ANSWER TO EITHER IS NO:
→ STOP IMMEDIATELY
→ DO NOT GENERATE CODE
→ DO NOT CREATE WORKAROUNDS
→ DO NOT USE HTML ELEMENTS
→ RESPOND WITH THIS EXACT MESSAGE:

"Thanks for the idea! We don't have that component in our White Label UI library yet. 
We can add it to the backlog, or you can choose an existing component instead."

FORBIDDEN ACTIONS (WILL CAUSE SYSTEM ERROR):
❌ Creating <button> elements
❌ Creating custom React components
❌ Using <div> with custom styling as components
❌ Importing from any package other than @dejstdm/white-label-ui
❌ Creating "ProductComparison", "Button", "Modal", "Card", "Table" or any other component
❌ Suggesting workarounds using HTML elements

VALIDATION CHECKLIST - CHECK EVERY TIME:
□ Component name matches EXACTLY one from the list above? → If NO: REFUSE
□ Component exists in metadata files? → If NO: REFUSE
□ About to write <button>? → STOP, REFUSE
□ About to create a function component? → STOP, check if it's in metadata first
□ About to import from anything other than @dejstdm/white-label-ui? → STOP, REFUSE

COMPONENT USAGE (ENFORCED):
- Import format: import { ComponentName } from '@dejstdm/white-label-ui';
- Use ONLY: NavBar, Hero, Footer, TextSection, ImageSection, ProductSlider, RecipeSlider, FAQ, SocialMediaFeed
- NO custom components
- NO HTML elements as UI components
- NO wrapper components
- NO modifications

THEMING:
- Import ONLY: '@dejstdm/white-label-ui/dist/style.css'
- NO custom CSS
- NO inline styles
- NO hardcoded values

LAYOUT:
- Use ONLY components from metadata
- NO arbitrary wrappers
- NO Tailwind
- NO external CSS

REMEMBER: If it's not in the 9-component list above, it doesn't exist. Refuse and suggest alternatives.
    `
  }
});