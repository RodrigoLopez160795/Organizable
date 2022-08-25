import { Logo } from "./logo.js";

export function Aside(){
    return `
    <aside class="aside">
      <div class="aside-top">
        ${Logo("item-padding",false)}
        <div class="flex aside-item aside-nav-item">
          <img src="./assets/images/board.svg" alt="Board logo" class="img-sm">
          <span class="font-reg">My boards</span>
        </div>
        <div class="flex aside-item aside-nav-item">
          <img src="./assets/images/trash.svg" alt="Trash logo" class="img-reg">
          <span class="font-reg">Closed Boards</span>
        </div>
        <div class="flex aside-item aside-nav-item">
          <img src="./assets/images/user.svg" alt="User logo" class="img-lg">
          <span class="font-reg">My profile</span>
        </div>
      </div>
      <div class="aside-bottom">
        <div class="flex aside-item aside-logout js-logout">
          <img src="./assets/images/logout.svg" alt="Logout logo" class="img-reg">
          <span>Log out</span>
        </div>
      </div>
    </aside>
    `
}