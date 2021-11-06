const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const babel = require('@babel/core')
// const less = require('less')

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '**/*.wxml',
                    to: './',
                    context: './src'
                },
                {
                    from: '**/*.json',
                    to: './',
                    context: './src'
                },
                // {
                // from: '**/*.jpg',
                // to: './',
                // context: './src'
                // },
                {
                    from: '**/*.png',
                    to: './',
                    context: './src'
                },
                {
                    from: '**/*.wxss',
                    to: './',
                    context: './src'
                },
                {
                    from: '**/*.wxs',
                    to: './',
                    context: './src',
                    transform: {
                        transformer(content, path) {
                            const newCode = babel.transformSync(content, {
                                babelrc: true,
                                "presets": ["@babel/env"]
                            }).code;
                            return Promise.resolve(newCode.toString());
                        },
                    }
                },
                {
                    from: '**/*.js',
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ["**/*.test.js", "**/*.spec.js"],
                    },
                    to: './',
                    context: './src'//,
                    // transform: {
                    //     transformer(content, path) {
                    //         const newCode = babel.transformSync(content, {
                    //             babelrc: true,
                    //             "presets": ["@babel/env"]
                    //         }).code;
                    //         return Promise.resolve(newCode.toString());
                    //     },
                    // }
                }
                // {
                //     from: '**/*.less',
                //     to: './',
                //     context: './src',
                //     transform: {
                //         transformer(content, path) {
                //             return less.render(content.toString()).then(function (output) {
                //                 return output.css;
                //             });
                //         }
                //     },
                //     transformPath: function (target) {
                //         return target.replace('.less', '.wxss');
                //     }
                // }
            ]
        })
    ]
}
