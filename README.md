[![Build Status](https://github.com/dakom/storybook-for-dominator-boilerplate/workflows/Test%2C%20Build%2C%20and%20Deploy/badge.svg)](https://github.com/dakom/storybook-for-dominator-boilerplate/actions)

# [https://dakom.github.io/storybook-for-dominator-boilerplate](https://dakom.github.io/storybook-for-dominator-boilerplate)

# About

A boilerplate / skeleton for running a [Storybook](https://storybook.js.org/) with simple html markup and auto-generating [Dominator](https://github.com/Pauan/rust-dominator) code.

It's also setup to allow loading media from an external location like a CDN, while having a local static server for development.

(both in styles via a sass mixin and html via a JS function)

# Dev Guide

* `npm start`
* Do not import styles to stories. Styles are globally available (imagine it's imported in `<head>`)
* Third-party styles and fonts should be added to `<head>` (via [preview-head.html](.storybook/preview-head.html))
* The only thing that is directly exported is CSS. Everything else is solely for reference and will not be exported at all.
* The Add-Ons panel is hidden by default, but can be toggled by hitting the `A` key
* Make sure to add stories via the `story()` or `storyAbout()` wrappers exported in `@utils/stories`. These will automatically create the `Notes` section.
* Separate stories vs. HTML snippets. Conceptually, the HTML snippets are _components_ and can be composed to create different, larger components.

# Auto-generated styles

There is a top-level `src/css/__auto-generated.scss` which is gitignored, since the entire point is that it differs in a dev vs. release environment.

It contains some ad-hoc sass functionality that can be used anywhere (it is imported at the top of index.scss for this reason):

* `@mixin bg_img($path)`: translates to `background-image: url(CDN_UI_PATH + $path)` where CDN_UI_PATH is swapped based on the environment

# Requirements

* [sass cli](https://sass-lang.com/install)
* [npm and stuff](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

# .env

* LOCAL_CDN_DIR="[PATH-TO-CDN-FOLDER]" 

On windows it should be the native windows path format, e.g. `"D:\\Dropbox\\Whatever"`

# CI Secrets

* GH_PAT (a github deployment token [see here](https://github.com/maxheld83/ghpages/pull/18)) 
