module.exports = {
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },

    'env': {
        'browser': true
    },

    'globals': {
        'Game': true,
        'Memory': true
    },

    'extends': 'eslint:recommended',
    'rules': {
        'indent': [ 'error', 4 ],
        'linebreak-style': [ 'error', 'unix' ],
        'quotes': [ 'error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true } ],
        'semi': [ 'error', 'always' ],

        'no-console': 'off'
    }
};