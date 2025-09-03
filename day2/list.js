function getPageno() {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('pageno')===null? 1: +searchParams.get('pageno');
}

function renderContacts(contacts) {
    const $contacts = document.getElementById('contacts');
    let html = ``;
    for(const c of contacts) {
        html+=`
            <tr>
                <td>${c.no}</td>
                <td>
                    <a href="read.html?no=${c.no}">${c.name}</a>
                </td>
                <td>${c.tel}</td>
                <td>${c.address}</td>
            </tr>
        `;
    }
    $contacts.innerHTML = html;
}

function renderPagination(pageno, pagesize, totalcount, blockSize=5) {
    const $p = document.getElementById('pagination');
    const numberOfPage = Math.ceil(totalcount/pagesize);
    
    const prev = Math.floor((pageno-1)/blockSize) * blockSize;
    const start = prev + 1;
    let end = prev + blockSize;
    let next = end + 1;
    if(end>=numberOfPage) {
        end = numberOfPage;
        next = 0;
    }

    let html = ``;
    if(prev>0) {
        html+=`<li class='page-item'><a class='page-link' href='list.html?pageno=${prev}'>이전으로</a></li>`
    }
    for(let i=start; i<=end; i++) {
        html+=`
            <li class='${i===pageno? "page-item active": "page-item"}'>
                <a class='page-link' href='list.html?pageno=${i}'>${i}</a>
            </li>`
    }
}

function fetchContacts(pageno) {
    const 요청url = `https://sample.bmaster.kro.kr/contacts?pageno=${pageno}&pagesize=10`
    axios.get(요청url).then(res=>{
        const {pageno,pagesize, totalcount,contacts} = res.data;
        renderContacts(contacts);
        renderPagination(pageno, pagesize, totalcount);
    }).catch(res=>{
        console.log(res);
    })
}