function upDate(previewPic) {
    console.log("Image event triggered");

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Image reset triggered");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded. Adding tabindex.");

    let images = document.querySelectorAll(".grid img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("tabindex added to image " + i);
    }
}