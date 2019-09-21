module.exports = {
	plugins: [
		require('postcss-preset-env')({
            customPropierties: true 
        }),
        require('css-mqpacker')({}),
        require('postcss-custom-media')({}),
        require('autoprefixer')({}),
        require('postcss-import')({}),
        // require('cssnano')({
        //     preset: 'default',
        // })
	]
}