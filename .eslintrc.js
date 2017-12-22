module.exports = {
    env: {
        jest: true
    },
    extends: 'rodoabad',
    rules: {
        'arrow-body-style': [
            2,
            'always'
        ],
        'padded-blocks': [
            2,
            'never'
        ],
        'object-curly-newline': 0,
        'react/jsx-no-bind': 0
    }
};
