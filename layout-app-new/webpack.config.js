const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "http://localhost:4201/",
        uniqueName: "layout",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "layout",
            library: {type: "var", name: "layout"},
            filename: "remoteEntry.js",
            exposes: {
                LayoutModule:
                    "./src/app/layout/layout.module.ts",
                Header: './src/app/layout/header/header.component.ts',
                Footer: './src/app/layout/footer/footer.component.ts'
            },
            shared: {
                "@angular/core": {singleton: true, requiredVersion: 'auto'},
                "@angular/common": {singleton: true, requiredVersion: 'auto'},
                "@angular/router": {singleton: true, requiredVersion: 'auto'},
            },
        }),
    ],
};
