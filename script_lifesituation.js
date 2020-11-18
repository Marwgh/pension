/*fetching the data*/
function init() {
    fetch("http://allofme.dk/ap/wp-json/wp/v2/lifesituation").then(r => r.json()).then(
        function (data) {
            createSections(data);
            console.log(data)
        }
    )
}
init();


function createSections(categories) {
    /*const urlpara = new URLSearchParams(window.location.search);
    const page = urlpara.get("page");*/
    categories.forEach(showproduct);

}

function showproduct(product) {
    const templ = document.querySelector("#Template").content;
    const copy = templ.cloneNode(true);

    const h1 = copy.querySelector("h1");
    h1.textContent = product.title_of_description;

    copy.querySelector(".text").innerHTML = product.content.rendered;

    /*
    const img = copy.querySelector(".productImg");
    img.setAttribute('src', product.location_image.guid);
    */
    document.querySelector("main").appendChild(copy);



}
