var imgref = document.getElementById("memeImg")

var url = "https://meme-api.herokuapp.com/gimme";

window.onload(getMeme())
function getMeme(){
    document.getElementById('loader').style.display = ""
    imgref.src = ''
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        imgref.src = data.url
        document.getElementById('loader').style.display = "none";
    });
}
