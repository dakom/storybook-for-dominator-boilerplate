[![Build Status](https://github.com/dakom/storybook-for-dominator-boilerplate/workflows/Test%2C%20Build%2C%20and%20Deploy/badge.svg)](https://github.com/dakom/storybook-for-dominator-boilerplate/actions)

# [https://dakom.github.io/storybook-for-dominator-boilerplate](https://dakom.github.io/storybook-for-dominator-boilerplate)


![Demo Screengrab](https://i.imgur.com/ahgHLLU.gif)

# About

A boilerplate / skeleton for [Storybook](https://storybook.js.org/) with vanilla html and auto-generating [Dominator](https://github.com/Pauan/rust-dominator) code (via [html-to-dominator-string](https://github.com/dakom/html-to-dominator-string).

It's also setup to allow loading media from an external location like a CDN, while having a local static server for development.

(both in styles via a sass mixin and html via a JS function)

# User Guide

The special sauce is in the `Notes` button :)

To navigate components, you need to use the search or drill down the tree since [expand-all isn't supported](https://github.com/storybookjs/storybook/issues/244#issuecomment-570438912)

# Dev Guide

## Overview 

* `npm start`
* Make sure to add stories via the `story()` or `storyAbout()` wrappers exported in `@utils/stories`. These will automatically create the `Notes` section.
* Do not import styles to stories. Styles are globally available (imagine it's imported in `<head>`)
* Third-party styles and fonts should be added to `<head>` (via [preview-head.html](.storybook/preview-head.html))
* The only thing that is directly exported is CSS. Everything else is solely for reference and will not be exported at all.
* Separate stories vs. HTML snippets. Conceptually, the HTML snippets are _components_ and can be composed to create different, larger components.
* The Add-Ons panel is hidden by default, but can be toggled by hitting the `A` key

## Live Media Storage (production deploy only)

Change `MEDIA_URL` in:

* [write-dynamic-sass.js](build-utils/write-dynamic-sass.js)
* [path.js](src/utils/path.js)

And the target folder in [copy-media-directory.js](build-utils/copy-media-directory.js)

## Auto-generated styles

There is a top-level `src/css/__auto-generated.scss` which is gitignored, since the entire point is that it differs in a dev vs. release environment.

It contains some ad-hoc sass functionality that can be used anywhere (it is imported at the top of index.scss for this reason):

* `@mixin bg_img($path)`: translates to `background-image: url(CDN_UI_PATH + $path)` where CDN_UI_PATH is swapped based on the environment


## .env

* LOCAL_CDN_DIR="[PATH-TO-CDN-FOLDER]" 

The path to the local directory which is synced to the remote cdn origin.
In this example it's just `_static-media` in the same directory as the repo

On windows it should be the native windows path format, e.g. `"D:\\Dropbox\\Whatever"`


Usually this file would be .gitignored, but it's checked in here for reference purposes

## CI/CD Secrets

* GH_PAT (a github deployment token [see here](https://github.com/maxheld83/ghpages/pull/18)) 

This isn't really necessary, except it makes it easier to deploy to gh_pages though github actions

## Requirements

* [sass cli](https://sass-lang.com/install)
* [npm and stuff](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)