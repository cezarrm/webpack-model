const path = require('path'); //CommonJS sistema do node

module.exports = {
    //tudo que estiver no objeto vai ser exportado;
    mode: 'production', //duas opções development = arquivo gerado mais rapido e n é minificado, 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
        },
    module: {
        rules: [{
           exclude: /node_modules/,
           test: /\.js$/, //arquivo termina com js 
           use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env']
            } 
           }
        }]
    },
    devtool: 'source-map', //faz o mapeamento
    };

//precisa exportar, se n nada sai do arquivo