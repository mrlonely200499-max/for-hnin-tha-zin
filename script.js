function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// mouseenter အစား 'click' လို့ ပြောင်းလိုက်ပါ
moveRandom.addEventListener("click", function (e) {
    e.preventDefault(); // link က တခြားနေရာကို ခုန်မသွားအောင် တားတာပါ
    moveRandomEl(e.target);
});