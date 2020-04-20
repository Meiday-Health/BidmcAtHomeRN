module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', "module:react-native-dotenv"],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          src: './src'
        },
      }]
    ]
  };
};
