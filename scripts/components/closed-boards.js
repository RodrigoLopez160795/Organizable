import { getBoards } from "../services/boards.js";

export function ClosedBoards() {
  renderBoards();
  return `
    <section class="section">
    <div class="container my-boards-container">
    <p class="title font-xl">Closed boards</p>
    <div class="js-closed-boards-list boards-container"></div>
    </div>
    </section
    `;
}

async function renderBoards() {
  const boards = await getBoards();

  let closedBoards;
  if (isThereABoard(boards)) {
    closedBoards = boards
      .filter((board) => board.closed === true)
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
  }else{
    closedBoards = `<p class="title font-lg">Nothing to show</p>`
  }
  return renderBoard(closedBoards);
}
function renderBoard(boards) {
  const closedBoards = document.querySelector(".js-closed-boards-list");
  closedBoards.innerHTML = boards;
}

function isThereABoard(boards) {
    const result = boards.filter((board) => board.closed === true);
    if (result.length > 0) return true;
  }

