const webpack = require('webpack');

module.exports = function override(config){
    const fallback = config.resolve.fallback || {};

    Object.assign(fallback, {
        "stream": require.resolve("stream-browserify"),
        fs: false,
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "os": require.resolve("os-browserify/browser"),
        dns: false,
        tls: false,
        "vm": require.resolve("vm-browserify"),
        child_process: false
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ]);
    return config;
}