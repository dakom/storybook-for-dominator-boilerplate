export const Path = (() => {

    const MEDIA_URL = process.env["NODE_ENV"] === "development" 
        ? 'http://localhost:4102'
        : 'https://raw.githubusercontent.com/dakom/storybook-for-dominator-boilerplate/gh-pages/_static-media';
        //: "https://dakom.github.io/storybook-for-dominator-boilerplate/_static-media";

    return {
        ui: path => `${MEDIA_URL}/app/ui/${path}`,
    }
})();