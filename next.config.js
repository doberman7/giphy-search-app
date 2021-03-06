const dotenv = require('dotenv');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

module.exports = {
    env: {
        // giphy_key: process.env.NEXT_PUBLIC_GIPHY_KEY,
        // NEXT_PUBLIC_GIPHY_KEY: process.env.NEXT_PUBLIC_GIPHY_KEY
    }
};
module.exports = withPlugins([
    [
        optimizedImages,
        {
            // these are the default values so you don't have to provide them if they are good enough for your use-case.
            // but you can overwrite them here with any valid value you want.
            inlineImageLimit: 8192,
            imagesFolder: 'images',
            imagesName: '[name]-[hash].[ext]',
            handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
            removeOriginalExtension: false,
            optimizeImages: true,
            optimizeImagesInDev: false,
            mozjpeg: {
                quality: 80
            },
            optipng: {
                optimizationLevel: 3
            },
            responsive: {
                adapter: require('responsive-loader/sharp')
            },
            pngquant: false,
            gifsicle: {
                interlaced: true,
                optimizationLevel: 3
            },
            svgo: {
                // enable/disable svgo plugins here
            },
            webp: {
                preset: 'default',
                quality: 75
            }
        }
    ]
]);
