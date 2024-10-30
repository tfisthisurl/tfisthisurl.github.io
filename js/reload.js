var img = document.querySelector(".JS-IMG");
var title = document.querySelector(".JS-TITLE");
var butt = document.querySelector(".JS-RELOAD");

(function() {

    // automatically changes 1st time loading the page
    let currentNumber = changeRand();

    // adds reloading function to button
    butt.addEventListener("click", (event) => {
        currentNumber = changeRand(currentNumber);
    });
})();


function randImg(current) {
    let rand;

    // makes sure it selects another random image when 'current' is not undefined
    do {
        rand = random(0, IMAGES.length - 1);
    } while (current != undefined && (rand == current));

    let toreturn = IMAGES[rand];
    return [toreturn, rand];
}


function changeRand(current) {
    // gets rand
    let newRand = randImg(current);

    // changes img and title
    let newUrl = newRand[0].url;
    let newTitle = newRand[0].title;

    img.src = newUrl;
    title.innerHTML = newTitle;

    // returns current random index for randImg change at next reload
    return newRand[1];
}