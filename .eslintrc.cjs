module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"]
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    "svelte/no-unused-svelte-ignore": "off",
    "svelte/no-at-html-tags": "warn",
    "no-useless-escape": "warn",
    "no-undef": "warn"
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser"
      }
    }
  ]
}
