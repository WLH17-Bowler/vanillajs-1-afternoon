console.log('a onda é minha')

let board = []


const play = (clickedId) => {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
        console.log(board)
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)
    
    const topl = board[0]
    const topc = board[1]
    const topr = board[2]
    const midl = board[3]
    const center = board[4]
    const midr = board[5]
    const botl = board[6]
    const botc = board[7]
    const botr = board[8]

    //across

    if (topl !== undefined && topl === topc && topl === topr) {
        alert(`${topl} wins`)
        return;
    }
    if (midl !== undefined && midl === center && midl === midr) {
        alert(`${midl} wins`)
        return;
    }
    if (botl !== undefined && botl === botc && botl === botr) {
        alert(`${botl} wins`)
        return;
    }

    //down

    if (topl !== undefined && topl === midl && topl === botl) {
        alert(`${topl} wins`)
        return;
    }
    if (topc !== undefined && topc === center && topc === botc) {
        alert(`${topc} wins`)
        return;
    }
    if (topr !== undefined && topr === midr && topr === botr) {
        alert(`${topr} wins`)
        return;
    }

    //diagonal

    if (topl !== undefined && topl === center && topl === botr) {
        alert(`${topl} wins`)
        return;
    }
    if (topr !== undefined && topr === center && topr === botl) {
        alert(`${topr} wins`)
        return;
    }

    //alert when board is full

    let boardFull = true

    for (let i =0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false
        }
    }
    if (boardFull === true) {
        alert(`It's a tie!`)
    }
}

function resetBoard() {
    // console.log(board)

    for (let i = 0; i < board.length; i++) {
        document.getElementById(i).innerText = ''
    }
    board = []
    console.log(board)
}