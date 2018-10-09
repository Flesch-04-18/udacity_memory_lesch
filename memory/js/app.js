var turnPoint=3;
var cardArray=["fa-diamond","fa-diamond","fa-paper-plane-o","fa-paper-plane-o","fa-anchor","fa-anchor","fa-bolt","fa-bolt","fa-cube","fa-cube","fa-leaf","fa-leaf","fa-bicycle","fa-bicycle","fa-bomb","fa-bomb"];

$(".card").click(turn());

    turn()

function restart(){
    const allCards = document.querySelectorAll(".card");
    $(".card").removeClass("match show unclickable");
    $(".moves").text("0");
    mixcards(cardArray);
    for (i=0; i < 16; i++){
        allCards[i].firstElementChild.classList.remove("fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb");
        allCards[i].firstElementChild.classList.add(cardArray[i]);
    }
    matchCounter=0;
    turnpoint=3;
    turn();
}

function mixcards(cardArray){
    var currentIndex = cardArray.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
    }

    return(cardArray);

}


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
            moves=moves+1;
            $(".moves").text(moves);
            console.log(matchCounter=matchCounter+1);
            // The game ends once all cards have been correctly matched with 16 cards it is matchCounter = 8.
            if (matchCounter==8){
                matchCounter=0;
                win();
            }
            else{
                turnPoint=0;
            return (matchCounter, moves);
    }
}
            // What happens when cards do not match
            else if ((flippedCard1.substr(3)) !== (flippedCard2.substr(3))) {
            var faName1 = '.' + (flippedCard1.substr(3));
            var faName2 = '.' + (flippedCard2.substr(3));
            console.log("DISMATCH " + faName1, faName2);
            setTimeout(() => {
            $(faName1).parent().removeClass("open show unclickable");
            $(faName2).parent().removeClass("open show unclickable");
            }, 1000);
            flippedCard1 = undefined;
            flippedCard2 = undefined;
            moves=moves+1;
            $(".moves").text(moves);
            turnPoint=0;
            return (moves);
        }
    }
})


    break;

case 3:
    //    Gamestart & restart
    $(".card").removeClass("match show  unclickable");
    var flippedCard1 = "";
    var flippedCard2 = "";
    matchCounter = 0;
    turnPoint=0;
    restart();
    break;

case 4:
    win();
    break;

default:
    break;
}
}

    function win() {
        
        //TODO winAlert.html as window.open 
        
        //alert(winAlert.html);
        matchCounter=0;
        console.log('You Win!')
        };

    function starColor(moves){
    if (moves = 8){
        $( "#star1" ).toggleClass( "stars-highlight" );
    }
    if (moves = 16){
        $( "#star2" ).toggleClass( "stars-highlight" );
    }
    if (moves = 24){
        $( "#star3" ).toggleClass( "stars-highlight" );
    }
}
    function scoreLog(){
        
    }

/*

    If the cards match, both cards stay flipped over.
    If the cards do not match, both cards are flipped face down.
*/
