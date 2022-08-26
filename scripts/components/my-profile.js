import { Input } from "./input.js";

export function MyProfile(){
    return `
    <section class="section">
        <div class="container profile-content">
            <p class="title font-xl">My profile</p>
            <form class="profile-form">
            ${Input({
                label: "username",
                placeholder: "RoLo",
                icon: "/assets/images/user.svg",
                name: "username",
                type: "text",
                alt: "Username logo",
              })}
              ${Input({
                label: "email",
                placeholder: "rod@mail.com",
                icon: "/assets/images/mail.svg",
                name: "email",
                type: "email",
                alt: "Email logo",
              })}
              ${Input({
                label: "first name",
                placeholder: "Rodrigo",
                icon: "/assets/images/folder.svg",
                name: "firstname",
                type: "text",
                alt: "Folder logo",
              })}
              ${Input({
                label: "last name",
                placeholder: "López Alvarado",
                icon: "/assets/images/folder.svg",
                name: "lastname",
                type: "text",
                alt: "Folder logo",
              })}
              <button type="submit" class="button-red font-s upcase">Update profile</button>
              <button class="button-black font-s upcase">Delete my account</button>
            </form>
        </div>
    </section>
    `
}