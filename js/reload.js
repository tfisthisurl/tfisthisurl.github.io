var img = document.querySelector(".JS-IMG");
var title = document.querySelector(".JS-TITLE");
var butt = document.querySelector(".JS-RELOAD");

(function() {
    let currentNumber = changeRand();

    butt.addEventListener("click", (event) => {
        currentNumber = changeRand(currentNumber);
    });
})();


function randImg(current) {

    let rand;

    do {
        rand = random(0, IMAGES.length - 1);
    } while (current != undefined && (rand == current));

    let toreturn = IMAGES[rand];
    return [toreturn, rand];
}


function changeRand(current) {
    let newRand = randImg(current);
    let newUrl = newRand[0].url;
    let newTitle = newRand[0].title;

    img.src = newUrl;
    title.innerHTML = newTitle;

    return newRand[1];
}