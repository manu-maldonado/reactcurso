<<<<<<< HEAD
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
=======
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
<<<<<<< HEAD
    rules: {
      'no-debugger': 'off',
    },
  },
]);
=======
    rules:{
      'no-debugger': 'off',
    }
  },
])
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
