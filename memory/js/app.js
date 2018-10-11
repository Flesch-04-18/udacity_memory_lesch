var cardArray = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o",
    "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube",
    "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];

var moves = 0;

$(".card").click();
restart()
turn()

function restart() {
    //    Gamestart & restart
    matchCounter = 0;

    moves = 0;
    const allCards = document.querySelectorAll(".card");
    $(".fa-star").removeClass("stars-highlight")
    $(".moves").text("0");
    mixcards(cardArray);

    for (i = 0; i < 16; i++) {
        allCards[i].classList.remove("match", "show", "unclickable", "open", "hidden");
        allCards[i].firstElementChild.classList.remove("fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt",
            "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb");
        allCards[i].firstElementChild.classList.add(cardArray[i]);
    }

}

function mixcards(cardArray) {
    // Takes cardArray and shuffle the Items and return new random ordered array
    var currentIndex = cardArray.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
    }

    return (cardArray);

}


function turn() {
    var flippedCard1 = flippedCard1;
    var flippedCard2 = flippedCard2;
    var matchCounter = 0;
    var turnpoint = 0;

    // The player flips one card over to reveal its underlying symbol.
    $(".card").click(function () {
        if (flippedCard1 === undefined && turnpoint === 0) {
            turnpoint += 1;
            $(this).addClass("open show unclickable");
            flippedCard1 = ($(this).children().attr('class'));

        }
        // The player then turns over a second card, trying to find the corresponding card with the same symbol.
        else if (flippedCard2 === undefined && turnpoint === 1 & !this.classList.contains("unclickable")) {
            turnpoint = 0;
            $(this).addClass("open show unclickable"),
                flippedCard2 = ($(this).children().attr('class'));

            //    What happens when cards match
            if ((flippedCard1.substr(3)) === (flippedCard2.substr(3))) {
                var faName = '.' + (flippedCard1.substr(3));

                $(faName).parent().removeClass("open").addClass("match");
                flippedCard1 = undefined;
                flippedCard2 = undefined;
                matchCounter += 1;
                countMovesColorStars()

                // The game ends once all cards have been correctly matched with 16 cards it is matchCounter = 8.

                // set to 1 for testing
                if (matchCounter === 1) {
                    matchCounter = 0;
                    win();
                }

            }
            // What happens when cards do not match
            else if ((flippedCard1.substr(3)) !== (flippedCard2.substr(3))) {
                var faName1 = '.' + (flippedCard1.substr(3));
                var faName2 = '.' + (flippedCard2.substr(3));

                setTimeout(() => {
                    $(faName1).parent().removeClass("open show unclickable");
                    $(faName2).parent().removeClass("open show unclickable");
                }, 1000);
                flippedCard1 = undefined;
                flippedCard2 = undefined;
                countMovesColorStars();

            }
        }
    })


    function countMovesColorStars() {
        // 1 is adding to moves and will be displayed in span class="moves" afterwards colorStar function is called
        moves = moves + 1;
        $(".moves").text(moves);
        starColor();
    }

    function win() {

        //TODO create modal 

        //open modal win;
        var deck = document.getElementById("deck");
        var winAllert = "<div><h1>Congratulations, you won!!!</h1></div>";
        const allCards = document.querySelectorAll(".card");

    for (i = 0; i < 16; i++) {
        allCards[i].classList.add("hidden");
    }
    deck.appendChild(winAllert)
}

    function starColor() {
        // check moves and add class stars-highlight to stars at 8, 16 and 24 moves
        if (moves == 8) {
            $("#star1").addClass("stars-highlight");
        }
        if (moves == 16) {
            $("#star2").addClass("stars-highlight");
        }
        if (moves == 24) {
            $("#star3").addClass("stars-highlight");
        }
    }
}