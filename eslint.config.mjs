import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        rules: {
            'no-console': 'off',            
        },
    },
    {
        ignores: ['node_modules', 'dist', 'babel.config.js', 'test/setEnvVars.js', 'coverage'],
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];