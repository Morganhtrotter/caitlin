// eslint.config.js (flat config)
import globals from 'globals'
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  // Ignore first (flat config style)
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  js.configs.recommended,
  ...vue.configs['flat/recommended'],

  // Turn off stylistic rules that Prettier already owns.
  prettier,

  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
