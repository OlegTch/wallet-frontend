const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'options',
                baseUrl: './src',
                aliases: {
                    '@root': './',
                    '@assets': './assets',
                    '@component': './component',
                    '@redux': './redux',
                    '@common': './modules/common',
                    '@dashboard': './modules/dashboard',
                    '@details': './modules/details',
                    '@style': './styles',
                    '@data': './data',
                    '@node_modules': '../node_modules',
                },
            },
            debug: true,
        },
    ],
};
