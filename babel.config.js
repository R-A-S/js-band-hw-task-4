module.exports = {
  presets: ['@babel/preset-env'],
  env: {
    test: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/transform-runtime',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-dynamic-import-node',
      ],
    },
  },
};
