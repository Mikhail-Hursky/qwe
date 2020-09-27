window.onload = function () {
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let position = document.getElementById('current').innerHTML;
    let item = document.querySelector('.main_3_list');
    prev.addEventListener('click', function () {
        console.log('window.onload -> position', position);

        if (position > 1) {
            document.getElementById('current').innerHTML = --position;
        } else {
            document.getElementById('current').innerHTML = 1;
        }

        if (position == 1) {
            item.style.left = '0';
            item.style.transition = '.3s all ease';
        }

        if (position == 2) {
            item.style.left = '-438px';
            item.style.transition = '.3s all ease';
        }

        if (position == 3) {
            item.style.left = '-872px';
            item.style.transition = '.3s all ease';
        }

        if (position == 4) {
            item.style.left = '-1306px';
            item.style.transition = '.3s all ease';
        }

        if (position == 5) {
            item.style.left = '0px';
            item.style.transition = '.3s all ease';
        }
    });
    next.addEventListener('click', function () {
        console.log('window.onload -> position', position);

        if (position < 5) {
            document.getElementById('current').innerHTML = ++position;
        } else {
            document.getElementById('current').innerHTML = 5;
        }

        if (position == 1) {
            item.style.left = '0';
            item.style.transition = '.3s all ease';
        }

        if (position == 2) {
            item.style.left = '-438px';
            item.style.transition = '.3s all ease';
        }

        if (position == 3) {
            item.style.left = '-872px';
            item.style.transition = '.3s all ease';
        }

        if (position == 4) {
            item.style.left = '-1306px';
            item.style.transition = '.3s all ease';
        }

        if (position == 5) {
            item.style.left = '-1748px';
            item.style.transition = '.3s all ease';
        }
    });
};