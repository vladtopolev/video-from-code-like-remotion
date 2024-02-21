const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React + Webpack</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
`
const bundleProject = async (entry) => {
    const outputDirectoryPath = path.resolve(__dirname, '../dist');
    return new Promise((res, rej) => {
        webpack({
            entry,
            output: {
                filename: 'bundle.js',
                path: outputDirectoryPath
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js']
            },
            module: {
                rules: [
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] } },

                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    templateContent: template
                })
            ]
        }, (err) => {
            if (err) {
                rej(err);
                return;
            }
            res(`${outputDirectoryPath}/index.html`)
        })
    })

}

module.exports = bundleProject;
