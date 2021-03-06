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
                    '@shared': './component/shared',
                    '@data': './data',
                    '@pages': './pages',
                    '@redux': './redux',
                    '@hoc': './hoc',
                    '@api': './services/api',
                    '@services': './services',
                    '@style': './styles',
                    '@node_modules': '../node_modules',
                },
            },
            debug: true,
        },
    ],
};
