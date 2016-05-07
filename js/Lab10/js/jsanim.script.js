window.onload = function() {
    var sub = document.querySelectorAll('.sub');
    console.log(sub);
    var subMenu = document.querySelectorAll('.sub-menu');

    for (var i=0; i<sub.length; i++) {
        console.log(sub[i]);
        sub[i].addEventListener('mouseenter', function() {
            console.log(this);
            sub[i].firstChild.style.display='block';
        })
        sub[i].addEventListener('mouseleave', function() {
            sub[i].firstChild.style.display='none';
        })
    }

}
