const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',  // Entry point for React
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js',  // Output file name
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],  // File extensions Webpack should handle
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Handle .ts and .tsx files
        use: 'ts-loader',  // Use ts-loader to compile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Serve files from the dist folder
    open: true,  // Automatically open the browser
    port: 3000,  // Run the app on port 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Use the index.html file from the src folder
    }),
  ],
};