import { Logo } from "../components/logo.js";
import { root } from "../config.js";
import DOMHandler from "../dom-handler.js";
import { createList, deleteList, getBoardInfo } from "../services/lists.js";
import STORE from "../store.js";
import HomePage from "./home.js";

async function boardInfo() {
  const boardInfo = JSON.parse(localStorage.getItem("current_board"));
  const board = await getBoardInfo(boardInfo.id);
  let result;
  if (board.lists.length > 0) {
    result = board.lists.reduce(
      (listArr, list) =>
        (listArr += `
            <div class="board-page-new-list">
            <p class="title font-list">${list.name}</p>
            <img src="assets/images/trashBoard.svg" class="js-delete-list pointer" id="${list.listId}">
            </div>
            `),
      ""
    );
  } else {
    result = "";
  }

  return renderLists(result);
}

function renderLists(list) {
  const lists = document.querySelector(".js-lists");
  lists.innerHTML = list;
  listenDeleteList();
}

function render() {
  boardInfo();
  const board = JSON.parse(localStorage.getItem("current_board"));
  return `
        <header class="board-page-header">${Logo(
          "js-return-home pointer",
          false
        )}</header>
        <div class="${board.color} board-page-container">
        <p class="font-xl title">${board.name}</p>
        <div class="js-lists list-container"></div>
        <form class="board-page-new-list js-new-list">
            <input type="text" placeholder="new list" name="new_list" class="board-page-new-list-input font-reg">
            <button type="submit" class="board-page-new-list-button">+</button>
        </form>
        </div>

    `;
}

function listenReturn() {
  const home = document.querySelector(".js-return-home");
  home.addEventListener("click", () => {
    localStorage.removeItem("current_board");
    localStorage.setItem("current_page", STORE.pages.my_boards());
    DOMHandler.load(HomePage(), root);
  });
}

function listenNewList() {
  const form = document.querySelector(".js-new-list");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const board = JSON.parse(localStorage.getItem("current_board"));
    const [name] = e.target.elements;
    if (name.value.length > 0) {
      await createList(board.id, { name: name.value });
    }
  });
}

function listenDeleteList() {
  const lists = document.querySelectorAll(".js-delete-list");
  lists.forEach((list) => {
    list.addEventListener("click", async ({ target }) => {
      const board = JSON.parse(localStorage.getItem("current_board"))
      await deleteList(board.id,target.id);
    });
  });
}

function BoardPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenReturn();
      listenNewList();
    },
  };
}

export default BoardPage;
