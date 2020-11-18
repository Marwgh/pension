/*fetching the data*/
function init() {
    const urlpara = new URLSearchParams(window.location.search);
    console.log("URLSearchParms" + window);
    const the_page_id = urlpara.get("page_id");
    console.log(the_page_id);

    fetch("http://allofme.dk/ap/wp-json/wp/v2/lifesituation/"+the_page_id )
        .then(r => r.json())
        .then(
        function (data) {
            showproduct(data);
            console.log(data)
        }
    )
}
init();

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
