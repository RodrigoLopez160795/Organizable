import { getBoards } from "../services/boards.js"

async function renderBoards(){
  const boards = await getBoards();
  let result= boards.reduce((boardsArr,board)=>
  (boardsArr += `
    <div class="${board.color.split(" ").join("-")} board js-board">
      <p class="font-boards">${board.name}</p>
      <div class="board-buttons-container">
        <button class="board-button"><img src="./assets/images/trashBoard.svg"></button>
        <button class="board-button"><img src="./assets/images/star.svg"></button>
      </div>
    </div>
  `
  ),"")
  return renderBoard(result)
}

function renderBoard(boards){
  const element = document.querySelector(".js-boards");
  element.innerHTML = boards;

}

export function MyBoards(){
  renderBoards()
    return `
    <section class="section">
      <div class="container my-boards-container">
        <p class="title font-xl">My boards</p>
        <p class="title font-lg">Boards</p>
        <div class="boards">
        <div class="js-boards boards-container"></div>
        <button class="font-boards create-board-button" id="js-create-board">Create Board</button>
        </div>
      </div>
    </section>
    `
}

