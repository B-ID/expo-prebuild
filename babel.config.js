module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
          root: ['.'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  }
}
