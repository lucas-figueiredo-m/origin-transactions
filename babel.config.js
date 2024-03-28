module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
          '.jsx',
        ],
        alias: {
          '@stories': ['./src/stories'],
          '@hooks': ['./src/hooks'],
          '@navigators': ['./src/navigators'],
          '@store': ['./src/store'],
          '@locales': ['./src/locales'],
          '@components': ['./src/components'],
        },
      },
    ],
  ],
};
