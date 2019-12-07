#!/bin/sh

echo "==> Init node environment"

# clean project
#cd .. & cd project
rm -rf dist
rm -rf node_modules
rm -f package.json package-lock.json

# create package.json
npm init -y

# webpack
npm i webpack webpack-cli webpack-dev-server --save-dev

# webpack utils
npm i file-loader css-loader style-loader --save-dev

# webpack-plugins
npm i copy-webpack-plugin html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin --save-dev

# templates
npm i handlebars-loader handlebars --save-dev

# babel
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties --save-dev

# tests
npm i @babel/plugin-syntax-dynamic-import --save-dev 


# react
npm i react react-dom --save-dev

# react-admin
#npm i react-admin ra-data-json-server prop-types

# react-admin modules
#npm i ra-data-drf ra-tree-ui-materialui jwt-decode
#npm i ra-data-fakerest @babel/plugin-syntax-dynamic-import --save-dev # tests
#npm i ra-language-english ra-tree-language-english ra-language-french ra-tree-language-french


# rich text
npm i ra-input-rich-text


# patch package.json to add dev and build scripts
sed -i '/"scripts": {/a \
    "build": "webpack --config webpack.production.config.js", \
    "dev": "webpack-dev-server --config webpack.dev.config.js --hot",' package.json
