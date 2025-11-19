const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
    input: 'src/module/cth-toolkit.js',
    output: {
        dir: 'dist/module',
        format: 'es',
        sourcemap: true,
    },
    plugins: [nodeResolve()],
};
