function toggleArrow(ev) {
    const up = '↑'
    const down = '↓'
    if (ev.target.innerHTML.includes(up)) {
        ev.target.innerHTML = ev.target.innerHTML.replace(up, '&darr;');
        return
    }
    ev.target.innerHTML = ev.target.innerHTML.replace(down, '&uarr;');
}

function attachEventToHeaders() {
    let headers = document.querySelectorAll('#data-table thead tr th');

    // let table = document.querySelector('#data-table')

    for (let header of headers)
        header.addEventListener('click', toggleArrow);

}

attachEventToHeaders();
