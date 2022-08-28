export function CreateBoard(){
    return `
    <form class="js-create-board-form board-form display-none">
        <p class="js-close-create">X</p>
        <div class="board-form-container">
    
        <div class="create-board-container">
            <input type="text" placeholder="Board name" class="create-board-container-input font-boards">
            <button class="create-board-container-button upcase font-xs">Create</button>
        </div>
        <div class="board-colors">
            <input type="radio" name="color" id="light-green" value="light-green" />
            <input type="radio" name="color" id="light-red" value="light-red" />
            <input type="radio" name="color" id="magic-blue" value="magic-blue" />
            <input type="radio" name="color" id="orange" value="orange" />
            <input type="radio" name="color" id="violet" value="violet" />
            <input type="radio" name="color" id="pink" value="pink" />
            <input type="radio" name="color" id="green" value="green" />
            <input type="radio" name="color" id="gray" value="gray" />
            <input type="radio" name="color" id="light-blue" value="light-blue" />
        </div>
        </div>
    </form>
    `
}