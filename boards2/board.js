// 1. 글목록 가져오기 (getBoard)
function getBoards() {

    let boards = localStorage.getItem('boards'); // (로컬에서 꺼내온 boards)를 boards라고 하자
    if (boards==null) { //boards가 아무것도없다면
        boards=[]; //boards는 지금부터 빈배열이다
        localStorage.setItem('boards',JSON.stringify(boards)); //그 빈배열을 로컬에 'boards'라는 이름으로 문자열로 저장한다(문자열로바꿔서 (JSON.stringify))
    } else {
        boards=JSON.parse(boards); //아니라면 있다면 배열로 전환해서 board에 저장하자
    }
    return boards;
}

// 2. 새로운 글 번호 생성
function getNewBno() {
    let bno = localStorage.getItem('bno');
    if(bno === null) {
        localStorage.setItem('bno','1');
        return 1;
    } else {
        bno = (+bno) + 1;
        localStorage.setItem('bno',bno);
        return bno
    }
}

// 3. 글번호로 글 하나 찾기
function getBoard(boards,bno) {
    for(const board of boards) {
        if(board.bno===bno) {
            return board;
        }
    }
    return null;
}