import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import whiteLabelPlugin from "./eslint-plugin-white-label-ui/index.mjs";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'white-label-ui': whiteLabelPlugin,
    },
    rules: {
      'white-label-ui/only-white-label-components': 'error',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "eslint-plugin-white-label-ui/**", // Ignore the plugin itself
  ]),
]);

export default eslintConfig;