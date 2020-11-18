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
    copy.querySelector("#linku").href += product.id;
    copy.querySelector("#linku").setAttribute = ("id", "linku"+product.id );
    copy.querySelector("#linku").textContent = product.title_of_description;
    document.querySelector("main").appendChild(copy);



}


