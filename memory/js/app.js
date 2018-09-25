

var turnPoint=3;
var x=0;



$(".card").click(turn());

    turn()


function turn() {
    var flippedCard1 = flippedCard1;
    var flippedCard2 = flippedCard2;
    var matchCounter = 0;
    var moves = 0;


switch (turnPoint) {

case 0:
    // The player flips one card over to reveal its underlying symbol.
    $(".card").click(function () {
        if (flippedCard1===undefined){
        $(this).addClass("open show unclickable");
        flippedCard1 = ($(this).children().attr('class'));
        turnPoint=1;
    }   
        // The player then turns over a second card, trying to find the corresponding card with the same symbol.
        else{
        $(this).addClass("open show unclickable"),
        flippedCard2 = ($(this).children().attr('class'));

            //    What happens when cards match
            if ((flippedCard1.substr(3)) === (flippedCard2.substr(3))) {
            var faName = '.' + (flippedCard1.substr(3));
            console.log("MATCH " + faName);
            $(faName).parent().removeClass("open").addClass("match");
            flippedCard1 = undefined;
            flippedCard2 = undefined;
            moves=moves+1;;
            $(".moves").text(moves);
            turnPoint=0;
            console.log(matchCounter=matchCounter+1);
            return (matchCounter);
    }
            // What happens when cards do not match
            else if ((flippedCard1.substr(3)) !== (flippedCard2.substr(3))) {
            var faName1 = '.' + (flippedCard1.substr(3));
            var faName2 = '.' + (flippedCard2.substr(3));
            console.log("DISMATCH " + faName1, faName2);
            setTimeout(() => {
            $(faName1).parent().removeClass("open show unclickable"),
            $(faName2).parent().removeClass("open show unclickable");
            }, 1000);
            flippedCard1 = undefined;
            flippedCard2 = undefined;
            moves=moves+1;
            $(".moves").text(moves);
            turnPoint=0;
        }
    }
})


    break;


/*case 1:

    secondFlipp(flippedCard1);
    break;
*/

case 2:
    //    What happens when cards match
    if ((flippedCard1.substr(3)) === (flippedCard2.substr(3))) {
        var faName = '.' + (flippedCard1.substr(3));
        console.log("MATCH " + faName);
        $(faName).parent().removeClass("open").addClass("match");
        flippedCard1 = "";
        flippedCard2 = "";
        moves=+1;;
        $(".moves").text(moves);
        turnPoint=0;
        return (matchCounter=+1);
    }
// What happens when cards do not match
else if ((flippedCard1.substr(3)) !== (flippedCard2.substr(3))) {
    var faName1 = '.' + (flippedCard1.substr(3));
    var faName2 = '.' + (flippedCard2.substr(3));
    console.log("DISMATCH " + faName1, faName2);
    setTimeout(() => {
        $(faName1).parent().removeClass("open show unclickable"),
        $(faName2).parent().removeClass("open show unclickable");
    }, 1000);
    flippedCard1 === ""
    flippedCard2 === ""
    moves=+1;
    $(".moves").text(moves);
    turnPoint=0;
    //return(flippedCard1, flippedCard2)
}
    break;

case 3:
    //    turn start
    var flippedCard1 = "";
    var flippedCard2 = "";
    turnPoint=0;
    break;


default:
    break;
}
}
    function firstFlipp() {

        $(".card").click(function () {
            if (flippedCard1===""){
            $(this).addClass("open show unclickable");
            flippedCard1 = ($(this).children().attr('class'));
            turnPoint=1;
            turn(flippedCard1);
        }   
            else{
            $(this).addClass("open show unclickable"),
            flippedCard2 = ($(this).children().attr('class'));
            console.log("click 2 " + $(this).children().attr('class'));
            turnPoint=2;
            turn(flippedCard1, flippedCard2)
            }})
    
    }

    function checkMatch(flippedCard1, flippedCard2) {
        if ((flippedCard1.substr(3)) === (flippedCard2.substr(3))) {
            var faName = '.' + (flippedCard1.substr(3));
            console.log("MATCH " + faName);
            $(faName).parent().removeClass("open").addClass("match");
            (flippedCard1).length = 0;
            flippedCard2 = ""
            moves=+1;
            $(".moves").text(moves);
            turnPoint=0;
            return (matchCounter=+1, flippedCard1, flippedCard2);
        }
    // What happens when cards do not match
    else if ((flippedCard1.substr(3)) !== (flippedCard2.substr(3))) {
        var faName1 = '.' + (flippedCard1.substr(3));
        var faName2 = '.' + (flippedCard2.substr(3));
        console.log("DISMATCH " + faName1, faName2);
        setTimeout(() => {
            $(faName1).parent().removeClass("open show unclickable"),
            $(faName2).parent().removeClass("open show unclickable");
        }, 1000);
        flippedCard1 === ""
        flippedCard2 === ""
        moves=+1;
        $(".moves").text(moves);
        turnPoint=0;
        return(flippedCard1, flippedCard2)
    }
};

    function win(matchCounter) {
        if (matchCounter === 8) {
            console.log("You Win!")
        }
};




/*

    If the cards match, both cards stay flipped over.
    If the cards do not match, both cards are flipped face down.

The game ends once all cards have been correctly matched.*/
