import {story, storyAbout} from "@utils/stories";
import {header} from "@html/header";

export default {
  title: 'Global Header',
}

export const NotLoggedIn = story("not logged in", () => header(false));
export const LoggedIn = storyAbout(
    "logged in", 
    () => header(true), 
    `## Logging in
      Happens with the auth system
    `
);