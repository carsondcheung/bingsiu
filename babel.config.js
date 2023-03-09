module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components/index',
          '@configs': './src/configs',
          '@contexts': './src/contexts',
          '@models': './src/models',
          '@screens': './src/screens',
          '@src': './src',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
