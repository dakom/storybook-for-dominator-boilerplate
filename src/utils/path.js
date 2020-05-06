export const Path = (() => {

    const MEDIA_URL = process.env["NODE_ENV"] === "development" 
        ? 'http://localhost:4102'
        : "https://example.com/cdn";

    const MEDIA_ADMIN = `${MEDIA_URL}/admin`;
    const MEDIA_UI = `${MEDIA_ADMIN}/ui`;

    return {
        MEDIA_ADMIN,
        MEDIA_UI,
        admin: path => `${MEDIA_ADMIN}/${path}`,
        ui: path => `${MEDIA_UI}/${path}`,
    }
})();