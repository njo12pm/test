function getNo() {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('no');
}

function fetchContacts(no) {
    const 요청주소 = `https://sample.bmaster.kro.kr/contacts/${no}`;

    axios.get(요청주소).then(res=>{
        if(res.data.status==='fail') {
            alert('연락처를 찾을 수 없습니다')
            location.href = 'list.html'
        } else {
            const {name, tel, address, photo} = res.data;
            document.getElementById('photo').src = photo;
            document.getElementById('tel').innerHTML = tel;
            document.getElementById('address').innerHTML = address;
            document.getElementById('name').innerHTML = name;
        }
    }).catch(res=>console.log(res));
}