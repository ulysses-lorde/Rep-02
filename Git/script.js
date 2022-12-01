function testar() {
    let n = document.getElementById('num1')
    let r = document.getElementById('res')
    if (n.value.length == 0) {
        alert('O valor foi nulo!')
    } else {
        r.innerHTML = 'Tudo certo!'
    }
}