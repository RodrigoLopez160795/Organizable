import { boardPatch, deleteBoard, getBoards } from "../services/boards.js";

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
        <button class="board-button js-recover" id="${
          board.id
        }"><img src="./assets/images/upArrow.svg" id="${board.id}"></button>
        <button class="board-button js-delete-board" id="${
          board.id
        }"><img src="./assets/images/trashBoard.svg" id="${board.id}"></button>
      </div>
    </div>
  `),
        ""
      );
  } else {
    closedBoards = `<p class="title font-lg">Nothing to show</p>`;
  }
  return renderBoard(closedBoards,boards);
}
function renderBoard(boards,boardsList) {
  const closedBoards = document.querySelector(".js-closed-boards-list");
  closedBoards.innerHTML = boards;
  listenRecover(boardsList)
  listendeleteBoard()
}

function isThereABoard(boards) {
  const result = boards.filter((board) => board.closed === true);
  if (result.length > 0) return true;
}

function listenRecover(boardsList) {
    const recover = document.querySelectorAll(".js-recover");
    recover.forEach((board) => {
      board.addEventListener("click", async ({ target }) => {
        const id = target.id;
        const boardSelected = boardsList.find(
          (board) => board.id === parseInt(id)
        );
        await boardPatch(id, { closed: !boardSelected.closed });
      });
    });
  }

function listendeleteBoard(){
    const boards = document.querySelectorAll(".js-delete-board");
    boards.forEach((board)=>{
        board.addEventListener("click",async({target})=>{
            const id = target.id;
            await deleteBoard(id)
        })
    })
}