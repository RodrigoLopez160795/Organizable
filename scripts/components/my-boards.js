import DOMHandler from "../dom-handler.js";
import { boardStarred, getBoards } from "../services/boards.js";

function isThereABoard(boards, boolean) {
  const result = boards.filter((board) => board.starred === boolean);
  if (result.length > 0) return true;
}

async function renderBoards() {
  const boards = await getBoards();
  let starredBoards = "";
  let boardsLists = "";
  if (isThereABoard(boards, true)) {
    starredBoards = boards
      .filter((board) => board.starred === true)
      .reduce(
        (boardsArr, board) =>
          (boardsArr += `
    <div class="${board.color.split(" ").join("-")} board js-board>
      <p class="font-boards">${board.name}</p>
      <div class="board-buttons-container">
        <button class="board-button"><img src="./assets/images/trashBoard.svg"></button>
        <button class="board-button js-starred" id="${
          board.id
        }"><img src="./assets/images/starBlack.svg" id="${board.id}"></button>
      </div>
    </div>
  `),
        ""
      );
  }
  if (isThereABoard(boards, false)) {
    boardsLists = boards
      .filter((board) => board.starred === false)
      .reduce(
        (boardsArr, board) =>
          (boardsArr += `
      <div class="${board.color.split(" ").join("-")} board js-board">
        <p class="font-boards">${board.name}</p>
        <div class="board-buttons-container">
          <button class="board-button"><img src="./assets/images/trashBoard.svg"></button>
          <button class="board-button js-starred" id="${
            board.id
          }"><img src="./assets/images/star.svg" id="${board.id}"></button>
        </div>
      </div>
    `),
        ""
      );
  }
  return renderBoard(boardsLists, starredBoards,boards);
}

function renderBoard(boards, starred,boardsList) {
  const normalBoards = document.querySelector(".js-boards");
  const starredBoards = document.querySelector(".js-starred-boards");
  normalBoards.innerHTML = boards;
  starredBoards.innerHTML = starred;
  listenStarred(boardsList);
}

export function MyBoards() {
  renderBoards();

  return `
    <section class="section js-add-opacity2">
      <div class="container my-boards-container">
        <p class="title font-xl">My boards</p>
        <p class="title font-lg">Starred boards</p>
        <div class="js-starred-boards boards-container"></div>
        <p class="title font-lg">Boards</p>
        <div class="boards">
        <div class="js-boards boards-container"></div>
        <button class="font-boards create-board-button" id="js-create-board">Create Board</button>
        </div>
      </div>
    </section>
    `;
}

function listenStarred(boardsList) {
  // const boards = document.querySelectorAll(".js-board");
  const starreds = document.querySelectorAll(".js-starred");
  starreds.forEach((starred) => {
    starred.addEventListener("click",async ({ target }) => {
      const id = target.id;
      const boardSelected = boardsList.find((board) => board.id === parseInt(id))
      await boardStarred(id,{starred:!boardSelected.starred})
    });
  });
}
