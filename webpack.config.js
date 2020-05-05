var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	mode: "development",
	entry: __dirname + '/app/index.js',
	module: {
		rules: [
			 {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                         presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
		]
	},
	output : {
		filename: 'ecp-tranformed.js'
	},
	plugins: [HTMLWebpackConfig]
};