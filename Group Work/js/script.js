$(document).ready(function () {
    $('#icon-bars').click(function () {
        $('ul').toggleClass('show');
    });
});

window.onscroll = function () {
    if (window.scrollY > 10) {
        document.getElementById('navv').style.backgroundColor = 'rgba(255, 255, 255)';
        // document.getElementById('navv').style.transition = '.3s';
        document.getElementById('navv').style.color = 'black';
        
        document.getElementById('icon-bars').style.color = "black";
        document.getElementById('nav-ref1').style.color = "black";
        document.getElementById('nav-ref2').style.color = "black";
        document.getElementById('nav-ref3').style.color = "black";
        document.getElementById('nav-ref4').style.color = "black";
        document.getElementById('nav-ref5').style.color = "black";
        document.getElementById('search-btn').style.color = "black";
        document.getElementById('logo').style.color = "black";
        
        
        
    } else {
        document.getElementById('navv').style.backgroundColor = 'transparent';
        // document.getElementById('navv').style.transition = '.3s';

        document.getElementById('nav-ref1').style.color = "white",
        document.getElementById('nav-ref2').style.color = "white";
        document.getElementById('nav-ref3').style.color = "white";
        document.getElementById('nav-ref4').style.color = "white";
        document.getElementById('nav-ref5').style.color = "white";
        document.getElementById('search-btn').style.color = "white";
        document.getElementById('logo').style.color = "white";
        document.getElementById('icon-bars').style.color = "white";
    }
}




function showSearch() {
    let searchBar = document.getElementById('search-bar');

    if (searchBar.style.display == "inline-block") {
        searchBar.style.display = "none";

    } else {
        searchBar.style.display = "inline-block";
    }

}




