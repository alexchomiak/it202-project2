const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = (env) => {
return {
    
	entry: './src/client/app.js',
	output: {
		path: path.join(__dirname), //path: path.join(__dirname,'dist/')
		filename: 'src.js',
		publicPath: '/'
	},
	module: {
		rules: [
		{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/,
			use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "/"
                    }
                },
                'css-loader',
                'sass-loader'
            ]
		}
		]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
		}),
		new ManifestPlugin({
			fileName: 'asset-manifest.json'
		}),
		new SWPrecacheWebpackPlugin({
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			logger(message) {
				if (message.indexOf('Total precache size is') === 0) {
				  // This message occurs for every build and is a bit too noisy.
				  return;
				}
				console.log(message);
			},
			minify: true, // minify and uglify the script
			navigateFallback: '/index.html',
			staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
		}),
		new CopyWebpackPlugin([
			{from: 'src/client/pwa'}
		])
    ],
	devServer: {
		contentBase: path.resolve(__dirname),
		historyApiFallback:true,
		watchContentBase: true,
		compress: true
	},
	
}
}
	//devtool: 'cheap-module-eval-source-map',
