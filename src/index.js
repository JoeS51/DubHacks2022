import {db, refe, app, onVal} from "./firebase.js";

function readNumData (nameId, nameHTML) {
    const trashCountRef = refe(db, 'Num items/' + nameId);
    onVal(trashCountRef, (snapshot) => {
        const data = snapshot.val();
        document.getElementById(nameHTML).innerHTML = "Number of Items:" + data;
    });
}

function readDepthData (nameId, nameHTML) {
    $("#trashDepth").css({"width": "40%"});
    //const trashCountRef = refe(db, 'Depth/' + nameId);
    // onVal(trashCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     const num = (data/10)*100;
    //     //document.getElementById(nameHTML).innerHTML = num + "%";
    //     //document.getElementById(nameHTML).style = 50;
    //     $("#trashDepth").css({"width": "10%"});  
    // });
}


function test() {
    alert("hi");
}
document.querySelector('#numsTrash').addEventListener('click', readNumData("Trash", "numsTrash"))
document.querySelector('#numsRecycle').addEventListener('click', readNumData("Recycle", "numsRecycle"))
document.querySelector('#numsTrash').addEventListener('click', readDepthData("Trash", "trashDepth10"))
//document.querySelector('#recycleDepth').addEventListener('click', readDepthData("Recycle", "recycleDepth"))


$(document).ready(function (){
    $("#scr").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
});

