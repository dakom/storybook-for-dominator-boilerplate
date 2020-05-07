const REMOTE_STATIC = process.env["NODE_ENV"] === "development" 
        ? 'http://localhost:4102'
        : "https://dakom.github.io/storybook-for-dominator-boilerplate/_static-media";

const REMOTE_UI = `${REMOTE_STATIC}/app/ui`;

const plugins = [
    require('postcss-import'),
    require('postcss-url')({ url: ({url}) => url.replace("%REMOTE_UI%", REMOTE_UI), }),
    require('tailwindcss'),
    require('autoprefixer'),
];

if(process.env["NODE_ENV"] === "production") {
    plugins.push(require('cssnano')({ preset: 'default', }));
}

module.exports = {
    map: process.env["NODE_ENV"] === 'development' ? true : false,
    plugins
}