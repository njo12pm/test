function getBoards() {
    let boards = localStorage.getItem('boards');
    if(boards===null) {
        boards=[];
        localStorage.setItem('boards', JSON.stringify(boards))
    } else {
        boards = JSON.parse(boards);
    }
    return boards;
}

// 2. 글을 작성할 때 새로운 글번호를 가져오는 함수
function getNewBno() {
    let bno = localStorage.getItem('bno');
    if(bno===null) {
        localStorage.setItem('bno','1');
        return 1;
    } else {
        bno = (+bno)+1;
        localStorage.setItem('bno',bno);
    }
    return bno;
}

// 3. 글 1개를 읽어오는 함수, 못찾으면 null
function getBoard(boards,bno) {
    for(const board of boards) {
        if(board.bno===bno) {
            return board;
        }
    }
    return null;
}
