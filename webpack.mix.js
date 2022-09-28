let mix = require('laravel-mix');

mix.ts('src/index.ts', 'dist').setPublicPath('dist');
mix.sass('scss/index.scss', 'css');