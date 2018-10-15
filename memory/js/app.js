var cardArray = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o",
    "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube",
    "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];

var moves = 0;
var intervalID = window.setInterval(runTime, 1000);
var m = 0;
var s = 0;
const playTime = $(".time");

$(".card").click();

restart();
turn();

function runTime() {
    //  Insert every second, minutes(m) and seconds(s) in time
    playTime.text(sPlus1());

    function sPlus1() {
        if (s < 59) {
            if (s < 9) {
                return (m + "\:" + "0" + (s += 1));
            }

            return (m + "\:" + (s += 1));
        } if (s = 60) {
            m += 1;
            s = (s + 1) - 60;
            return (m + "\:" + "0" + (s));
        }
    };
}

function restart() {
    //    Gamestart & restart
    matchCounter = 0;
    s = 0;
    m = 0;
    playTime.text("0:00");
    intervalID = 1000;


    moves = 0;
    const allCards = document.querySelectorAll(".card");
    $(".fa-star").removeClass("stars-highlight")
    $(".moves").text("0");
    $("button").addClass("hidden");
    $(".restart").removeClass("hidden");
    mixcards(cardArray);

    for (i = 0; i < 16; i++) {
        allCards[i].classList.remove("match", "show", "unclickable", "open", "hidden");
        allCards[i].firstElementChild.classList.remove("fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt",
            "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb");
        allCards[i].firstElementChild.classList.add(cardArray[i]);
    }
    turn();

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
        if (flippedCard2 === undefined && $("li.open").length === 1 && turnpoint === 1 & !this.classList.contains("unclickable")) {
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

                // The game ends once all cards have been correctly matched with 16 cards it is matchCounter = 8
                if (matchCounter === 8) {
                    matchCounter = 0;
                    win();
                }

            }//
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
        //open winmessage

        var deck = document.querySelector(".deck");
        var childFromDeck = document.querySelector("li.card");
        var winAllert = document.createElement("div");

        var text = "\<h1\>Congratulations, you won\!\!\!\<\/h1\>\<br\>\<br\>" +
            "\<h2\>It takes you " + moves + " moves to complete!\<br\>\<br\>" +
            "And your Time is " + $(".time").text() + "\<\/h2\>\<br\>\<br\>";

        intervalID = 0;
        $(".time").addClass("hidden");
        $(".restart").addClass("hidden");
        $("button").removeClass("hidden");
        winAllert.insertAdjacentHTML('afterbegin', text);

        for (i = 0; i < 16; i++) {
            var childFromDeck = document.querySelector("li.card");
            deck.removeChild(childFromDeck);
        }
        deck.appendChild(winAllert);
    };
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

function playAgain() {
    // is fired when button is clicked
    // remove winmessage, create new 16 cards in deck
    var deck = document.querySelector(".deck");
    var childFromDeck = deck.querySelector("div");

    deck.removeChild(childFromDeck);
    for (i = 0; i < 16; i++) {
        var newCard = document.createElement("li");
        var newI = document.createElement("i");
        newCard.appendChild(newI);
        deck.appendChild(newCard);
    }
    $("li").addClass("card");
    const allCards = document.querySelectorAll(".card");
    for (i = 0; i < 16; i++) {
        allCards[i].firstElementChild.classList.add("fa");
    };
    $(".time").removeClass("hidden");
    restart();
}