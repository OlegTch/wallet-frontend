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
                    '@style': './styles',                    
                    '@node_modules': '../node_modules',
                },
            },
            debug: true,
        },
    ],
};
