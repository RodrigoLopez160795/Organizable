import { userKey } from "../config.js";
import STORE from "../store.js";
import { Input } from "./input.js";

function renderErrors(error) {
  return `<p class="error">${error}</p>`;
}

export function MyProfile(errors){
  const user = STORE.getUserValues()
    return `
    <section class="section">
        <div class="container profile-content">
            <p class="title font-xl">My profile</p>
            <form class="profile-form" id="js-update-user">
            ${errors.map(renderErrors).join("")}
            ${Input({
                label: "username",
                placeholder: "RoLo",
                icon: "/assets/images/user.svg",
                name: "username",
                type: "text",
                alt: "Username logo",
                value: user.username
              })}
              ${Input({
                label: "email",
                placeholder: "rod@mail.com",
                icon: "/assets/images/mail.svg",
                name: "email",
                type: "email",
                alt: "Email logo",
                value: user.email
              })}
              ${Input({
                label: "first name",
                placeholder: "Rodrigo",
                icon: "/assets/images/folder.svg",
                name: "firstname",
                type: "text",
                alt: "Folder logo",
                value: user.firstname
              })}
              ${Input({
                label: "last name",
                placeholder: "López Alvarado",
                icon: "/assets/images/folder.svg",
                name: "lastname",
                type: "text",
                alt: "Folder logo",
                value: user.lastname
              })}
              <button type="submit" class="button-red font-s upcase">Update profile</button>
              <button class="button-black font-s upcase">Delete my account</button>
            </form>
        </div>
    </section>
    `
}