var links = document.querySelectorAll("a.nav-link");
links.forEach(function(link){
    if(window.innerWidth <= 764){
        link.classList.remove("pe-4");
    }
    link.classList.remove("active");
    if(link.getAttribute("data-link") == linkId){
        link.classList.add("active");
    }  
})
var brand = document.querySelector(".navbar-brand");
var navButton = document.querySelector("button.navbar-toggler");
if(window.innerWidth <= 764){
    brand.classList.add("ms-2");
    navButton.classList.add("m3-2");
}
else{
    brand.classList.remove("ms-2");
    navButton.classList.remove("ms-2");
}

/*var url_string = window.location.href;
    var url = new URL(url_string);
    var paramValue = url.searchParams.get("filename");
    alert(paramValue)
    */