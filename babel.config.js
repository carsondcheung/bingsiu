module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@config': './src/config',
          '@helpers': './src/helpers',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
