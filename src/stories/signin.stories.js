import {story, storyAbout} from "@utils/stories";
import {signin} from "@html/signin";

export default {
  title: 'Signin',
}

export const SignIn = storyAbout(
    "Sign in", 
    signin, 
    `## See: https://tailwindui.com/preview
    `
);