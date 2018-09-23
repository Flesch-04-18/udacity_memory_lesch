/*Each turn:

    The player flips one card over to reveal its underlying symbol.
    The player then turns over a second card, trying to find the corresponding card with the same symbol.
    If the cards match, both cards stay flipped over.
    If the cards do not match, both cards are flipped face down.

The game ends once all cards have been correctly matched.


functions


    Flipping cards
    What happens when cards match
    What happens when cards do not match
    When the game finishes


Criteria 	Meets Specifications

Memory Game Logic
	

The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

Congratulations Popup
	

When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

Restart Button
	

A restart button allows the player to reset the game board, the timer, and the star rating.

Star Rating
	

The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).

The number of moves needed to change the rating is up to you, but it should happen at some point.

Timer
	

When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

Move Counter
	

Game displays the current number of moves a user has made.

Interface Design
Criteria 	Meets Specifications

Styling
	

Application uses CSS to style components for the game.

Usability
	

All application components are usable across modern desktop, tablet, and phone browsers.

Documentation
Criteria 	Meets Specifications

README
	

A README file is included detailing the game and all dependencies.

Comments
	

Comments are present and effectively explain longer code procedure when necessary.

Code Quality
	

Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.
Suggestions to Make Your Project Stand Out!

    Add CSS animations when cards are clicked, unsuccessfully matched, and successfully matched.
    Add unique functionality beyond the minimum requirements (Implement a leaderboard, store game state using local storage, etc.)
    Implement additional optimizations that improve the performance and user experience of the game (keyboard shortcuts for gameplay, etc).

*/