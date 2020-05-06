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
    const dominator = htmlToDominator(html);
    return {
        notes: {
            html: "```html\n" + html + "\n```",
            dominator: "```rust\n" + dominator + "\n```",
        }
    }
}