const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
return {
    
	entry: './src/client/app.js',
	output: {
		path: path.join(__dirname,'dist/'),
		filename: 'src.js'
		
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
                        publicPath: "dist/"
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
        })
    ],
	devServer: {
		contentBase: path.resolve(__dirname,'dist/'),
		watchContentBase: true,
		compress: true
	}
}
}
	//devtool: 'cheap-module-eval-source-map',
