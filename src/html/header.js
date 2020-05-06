import {Path} from "@utils/path";

export const header = (loggedIn) => `
  <div class="container">
    <div class="row">
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        <div class="green large">Two of three columns</div>
      </div>
      <div class="col-sm">
        ${loggedIn 
            ? `Profile`
            : `Sign in`
         }
      </div>
    </div>
  </div>
`;