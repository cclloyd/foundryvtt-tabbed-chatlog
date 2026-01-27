const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
    input: 'src/module/fvtt-tabbed-chatlog.js',
    output: {
        dir: 'dist/module',
        format: 'es',
        sourcemap: true,
    },
    plugins: [nodeResolve()],
};
