/* eslint max-lines: 'off' */

module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2020': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:node/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 11
    },
    'rules': {
        'accessor-pairs': 'error',
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': 'error',
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'arrow-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': 'off',
        'callback-return': 'error',
        'camelcase': 'error',
        'capitalized-comments': [
            'error',
            'always'
        ],
        'class-methods-use-this': 'error',
        'comma-dangle': 'error',
        'comma-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        'complexity': 'error',
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-return': 'off',
        'consistent-this': 'error',
        'curly': 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-location': 'off',
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': [
            'error',
            'declaration'
        ],
        'function-call-argument-newline': [
            'error',
            'consistent'
        ],
        'function-paren-newline': 'error',
        'generator-star-spacing': 'error',
        'global-require': 'off',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'off',
        'handle-callback-err': 'error',
        'id-blacklist': 'error',
        'id-denylist': 'error',
        'id-length': 'off',
        'id-match': 'error',
        'implicit-arrow-linebreak': [
            'error',
            'beside'
        ],
        'indent': [
            'error',
            4
        ],
        'indent-legacy': 'off',
        'init-declarations': 'off',
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'line-comment-position': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-comment': 'error',
        'lines-around-directive': 'error',
        'lines-between-class-members': 'error',
        'max-classes-per-file': 'error',
        'max-depth': 'error',
        'max-len': ['error', 120],
        'max-lines': 'error',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'error',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'error',
        'multiline-comment-style': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'off',
        'no-bitwise': 'off',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-catch-shadow': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        'no-constructor-return': 'error',
        'no-continue': 'off',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'no-floating-decimal': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
        'no-mixed-requires': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-native-reassign': 'error',
        'no-negated-condition': 'off',
        'no-negated-in-lhs': 'error',
        'no-nested-ternary': 'off',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-path-concat': 'error',
        'no-plusplus': [
            'error',
            {
                'allowForLoopAfterthoughts': true
            }
        ],
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-restricted-exports': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-properties': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'off',
        'no-return-await': 'off',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-spaced-func': 'error',
        'no-sync': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable-loop': 'error',
        'no-unused-expressions': 'error',
        'no-use-before-define': 'off',
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'error',
        'node/exports-style': [
            'error',
            'module.exports'
        ],
        'node/file-extension-in-import': [
            'error',
            'always'
        ],
        'node/global-require': 'error',
        'node/no-mixed-requires': 'error',
        'node/prefer-global/console': [
            'error',
            'always'
        ],
        'node/prefer-promises/fs': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': 'off',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-shorthand': 'error',
        'one-var': 'off',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': 'error',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-reflect': 'off',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'off',
        'quote-props': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'radix': [
            'error',
            'as-needed'
        ],
        'require-atomic-updates': 'off',
        'require-await': 'off',
        'require-jsdoc': 'off',
        'require-unicode-regexp': 'error',
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        'semi': 'off',
        'semi-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'sort-imports': 'error',
        'sort-keys': 'off',
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always'
        ],
        'strict': [
            'error',
            'never'
        ],
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'template-tag-spacing': 'error',
        'unicode-bom': [
            'error',
            'never'
        ],
        'valid-jsdoc': 'error',
        'vars-on-top': 'error',
        'wrap-iife': 'error',
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',
        'yoda': [
            'error',
            'never'
        ]
    }
};
