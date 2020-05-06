import {story, storyAbout} from "@utils/stories";
import {img_element, img_css} from "@html/images";

export default {
  title: 'Images',
}

export const ImageElement = storyAbout(
    "image element", 
    img_element,
    "An image as HTML element"
);

export const ImageCss = storyAbout(
    "image css", 
    img_css,
    "An image as CSS background-image"
);