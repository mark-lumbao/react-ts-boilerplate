import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';

const babelOptions = ({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
});

const devServer = ({
  contentBase: `${__dirname}/public`,
  compress: true,
  publicPath: '/dist/',
  port: process.env.PORT || 1234,
  writeToDisk: true,
  historyApiFallback: true,
  overlay: {
    errors: true,
    warnings: true,
  },
  open: true,
});

const config: Configuration & { devServer: typeof devServer } = ({
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/public`,
    filename: '[id][hash].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelOptions,
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          'css-loader',
          'style-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', ',jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React TS',
      template: `${__dirname}/src/template.html`,
      minify: true,
    }),
    new CleanWebpackPlugin(),
  ],
  devServer,
});

export default config;
