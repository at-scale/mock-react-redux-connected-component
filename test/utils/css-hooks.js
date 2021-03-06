const hook = require('css-modules-require-hook');
const sass = require('node-sass');

hook({
    extensions: [
        '.scss'
    ],
    preprocessCss: (data, file) => {
        return sass.renderSync({ // eslint-disable-line no-sync
            data,
            file
        }).css;
    }
});
