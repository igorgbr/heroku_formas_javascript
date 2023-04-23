var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--3-",
    "---1",
    "-2--",
    "--4-",
]

var solution = [
    "1432",
    "4321",
    "3214",
    "2143",
]

window.onload = () => setGame();

let setGame = () => {
    // digits 1-4
    for(let i = 1; i <= 4; i++) {
        let number = document.createElement("div")
        number.id = i
        number.innerHTML = `<img src='./imgs/${i}.png' style="width:40px;clear:both;">`
        number.addEventListener("click", selectNumber)
        number.classList.add("number")
        document.getElementById("digits").appendChild(number)
    }

    // board 4x4
    for (let row = 0; row < 4; row++ ){
        for(let col = 0; col < 4; col++) {
            let tile = document.createElement("div")
            tile.id = row.toString() + "-" + col.toString();
            if(board[row][col] != "-") {
                tile.innerHTML = `<img src='./imgs/${board[row][col]}.png' style="width:40px;clear:both;">`
                tile.classList.add("tile-start")
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile")
            document.getElementById("board").append(tile)
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected")
    }
    numSelected = this;
    numSelected.classList.add("number-selected") 
}

function selectTile() {
    if(numSelected) {
        if (this.innerText != "") {
            return;
        }

        let coord = this.id.split("-") // ["1", "2"]
        let row = parseInt(coord[0])
        let col = parseInt(coord[1])

        if (solution[row][col] == numSelected.id) {
            this.innerHTML = `<img src='./imgs/${numSelected.id}.png' style="width:40px;clear:both;">`
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors            
        }
    }
}