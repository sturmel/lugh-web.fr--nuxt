import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      "no-trailing-spaces": ["warn"],
      "prefer-promise-reject-errors": "off",
      "vue/no-v-html": "off",
      "no-trailing-spaces": ["warn"],
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "vue/multi-word-component-names": ["error", {
        ignores: ["error", "Error"]
      }]
    },
    rules: {
      "no-trailing-spaces": ["warn"],
      "prefer-promise-reject-errors": "off",
      "vue/no-v-html": "off",
      "no-trailing-spaces": ["warn"],
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "vue/multi-word-component-names": ["error", {
            ignores: ["error", "Error"]
      }]
    },
    ignorePatterns: ['dist', 'node_modules', 'build', 'coverage', 'docs', 'test'],
  }
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
)
