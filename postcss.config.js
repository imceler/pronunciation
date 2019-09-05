module.exports = {
	plugins: [
		require('postcss-preset-env')({}),
        require('css-mqpacker')({}),
        require('postcss-custom-media')({}),
        require('autoprefixer')({}),
        require('postcss-import')({}),
        // require('cssnano')({
        //     preset: 'default',
        // })
	]
}