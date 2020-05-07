[![Build Status](https://github.com/dakom/storybook-for-dominator-boilerplate/workflows/Test%2C%20Build%2C%20and%20Deploy/badge.svg)](https://github.com/dakom/storybook-for-dominator-boilerplate/actions)

# [https://dakom.github.io/storybook-for-dominator-boilerplate](https://dakom.github.io/storybook-for-dominator-boilerplate)


![Demo Screengrab](https://i.imgur.com/ahgHLLU.gif)

# About

The intent is that the UI developer works with this project to finalize HTML and CSS. At build time, a final `styles.css` is produced which can be used as-is in the target project, distributed as an independant library, loaded remotely, etc.

HTML and/or Dominator source code can be copied from the Storybook Notes tab here, and pasted into the app source code as a starting point for adding all the interactivity.

It's fundamentally a boilerplate / skeleton for [Storybook](https://storybook.js.org/) with:

* [Rust Dominator](https://github.com/Pauan/rust-dominator) code (via [html-to-dominator-string](https://github.com/dakom/html-to-dominator-string).
* Vanilla html
* PostCSS + TailwindCSS
* Separate media location
* Dual environment setup (load media locally vs. remote CDN)
* At build time, generates both a [styles.css](https://dakom.github.io/storybook-for-dominator-boilerplate/dist/styles.css) with source maps and a greatly minified [styles.min.css](https://dakom.github.io/storybook-for-dominator-boilerplate/dist/styles.min.css) and makes them available in the website root.

# User Guide

The special sauce is in the `Notes` button :)

To navigate components, you need to use the search or drill down the tree since [expand-all isn't supported](https://github.com/storybookjs/storybook/issues/244#issuecomment-570438912)

# Dev Guide

## One-time configuration 

Change `REMOTE_STATIC` (and other media path variables) in:

* [postcss.config.js](postcss.config.js)
* [path.js](src/utils/path.js)

Change `LOCAL_CDN_DIR` in `.env` to the local directory which serves as a mirror of the remote CDN. Usually this file would be .gitignored but it's checked in here for reference purposes

Change `TARGET_DIRECTORY` in [copy-media-directory.js](build-utils/copy-media-directory.js) for where the "remote" media should be copied to. _Note: this likely won't exist on a larger project - it's only here for demo purposes, where the media lives in the same repo as the source code_.

Add Github Secrets:

* GH_PAT (a github deployment token [see here](https://github.com/maxheld83/ghpages/pull/18)) - only for deploying to gh_pages

## Media paths in code

The above configuration allows using `%VAR_NAME%` in CSS and `Path.fn()` in JS in order to get the runtime url, without having to worry about the environment at all.

See [images.css](src/css/images.css) and [images.js](src/html/images.js) for examples.

## General Overview 

* `npm start`
* The entry point for CSS bundling is [imports.css](src/imports.css)
* Make sure to add stories via the `story()` or `storyAbout()` wrappers exported in `@utils/stories`. These will automatically create the `Notes` section. Failure to do this will result in no Notes.
* Do not import styles to stories. Styles are bundled independantly and imported as a single `styles.css`.
* Third-party styles and fonts should be added to `<head>` (via [preview-head.html](.storybook/preview-head.html))
* The only thing that is directly exported is CSS. Everything else is solely for reference and will not be exported at all.
* Stories should merely be thin layers over HTML components. The HTML components should be composed to create different, larger components.
* The Add-Ons panel is hidden by default, but can be toggled by hitting the `A` key