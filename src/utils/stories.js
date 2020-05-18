import * as htmlToDominator from "html-to-dominator-string";

export const story = (name, component) => {
    component.story = {
        name,
        parameters: makeParameters(component)
    }

    return component;
}


export const storyAbout = (name, component, aboutMarkdown) => {
    const base = story(name, component);
    base.story.parameters.notes.about = aboutMarkdown;
    return base;
}

const makeParameters = component => {
    const html = component();
    const dominatorTrimmed = invert_media (dominator_replacer) (htmlToDominator(component(), {trim: true}));
    const dominatorNotTrimmed = invert_media (dominator_replacer) (htmlToDominator(component(), {trim: false}));
    return {
        notes: {
            html: "```html\n" + html + "\n```",
            dominator: "```rust\n" + dominatorNotTrimmed + "\n```",
            dominatorTrimmed: "```rust\n" + dominatorTrimmed + "\n```",
        }
    }
}

import {REMOTE_UI} from "./path";

const matcher = new RegExp(`"${REMOTE_UI}/(.*)"`, 'g');

const invert_media = replacer => str => {

    const updated = str.replace(matcher, (match, part, offset, whole) => {
        return replacer(part);
    });

    return updated;
}

const dominator_replacer = part => `path::ui("${part}")`;
const html_replacer = part => `"\`\${Path.ui("${part}")}\`"`;