function voltarParaTopo() {
    document.documentElement.scrollTop = 0;
}


//identificar o clique no menu
const menuItems = document.querySelectorAll('.icons a');
//console.log(menuItems);

//verificar se cada item foi clicado
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    //event.preventDefault();
    //console.log(event)
    const element = event.target;
    //console.log(element)
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    

    window.scroll({
        top: to -70,
        behavior: "smooth",
    })
}

