function changeIMG(name) {
    document.querySelector('#mainImg').src = name;
}

function iconBtn() {
    const heart = document.getElementById('icon');
    const weq = 'icon-off.png';
    if (weq == 'icon-off.png') {
        heart.src = 'icon-on.png';
    }
    else {
        heart.src = 'icon-off.png';
    }

}
