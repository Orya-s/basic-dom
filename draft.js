
var fieldBorders = playingField.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

const inBorder = function(dir, newLoc) {

    let ballLoc = ball.getBoundingClientRect()[dir]
    if(ballLoc < 0) {
        let way = "height";
        if(dir == "right" || dir == "left") {
            way = "width";
        }
        console.log(window.screen[way]);
        ballLoc = parseFloat(window.screen[way]) + ballLoc
    }
    console.log(ballLoc);
    console.log(fieldBorders[dir]);


    console.log(window.screen.height + "  " +
        window.screen.width);
    // console.log(document.body.getBoundingClientRect());

    if(fieldBorders[dir] + 25 < ballLoc) return true;

}