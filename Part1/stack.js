<html>
    <head>
        <meta charset="utf-8"/>
        <style>
            .tictac
            {
                background:purple;
                border:#999 10px groove;
                width:180px;
                height:180px;
                font-size:150px;
            }
        </style>
        <script>
            // create a variable for if the game is over, initialize it to false

            var gameOver = false;

            // create a variable for the current player, initialize it to 'O' or 'X'
            // based on who will go first


            if(confirm("X goes first?"))  //Can't figure out how to do Yes or No alert box
            { 
                var player = 'X';
            }
            else
            { 
                var player = 'O';
            } 


            // create an array for the squares using the regular methodology

            var squares = new Array();
                squares[0] = 0;
                squares[1] = 1;
                squares[2] = 2;
                squares[3] = 3;
                squares[4] = 4;
                squares[5] = 5;
                squares[6] = 6;
                squares[7] = 7;
                squares[8] = 8;

            // create a 2-d array of the win combinations, the data is as follows:
            /*
                0, 1, 2
                3, 4, 5
                6, 7, 8
                0, 3, 6
                1, 4, 7
                2, 5, 8
                0, 4, 8
                2, 4, 6

            */

            var winCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            // declare function named reset with no parameters

            function reset()
            {
                // write a for loop starting at index 1 instead of the 
                // usual 0, that loops through all 9 positions

                var i;
                for (var i = 1; i < squares + 1; i++)
                {
                    // create a variable to relate to each HTML button,
                    // set it equal to explicit text "sqr" concatenated
                    // with the looping variable of the for loop

                    var htmlButton = "sqr" + i;

                    // update the associated HTML element with the id
                    // equal to the variable created above, set it equal
                    // to and explicit empty string

                    htmlButton = "";

                }                   

                // reset the global variable for the squares to an 
                // empty array using the literal methodology

                squares = [];

                // reset the global variable for the game being over
                // setting it equal to false

                gameOver = false;

            }

            // declare function named squareClick with one parameter called square

            function squareClick(square)
            {
                // create a variable that is set equal to the HTML element
                // with the id of square (i.e. the parameter) and retrieve its value
                //

                var idElement = document.getElementById(square).value;

                // this will be used down below as the id to update the HTML element

                // create a variable that is set equal to the JavaScript method call
                // parseInt() passing as an argument square.substring(3, 4), 
                // subtract one from the result of the parseInt method call
                // 

                var parseSquare = ((parseInt(square.substring(3, 4))) - 1);

                // this will represent the index of the array of squares where
                // the user clicked

                // write an if statement that evaluates if the variable
                // value is equal to explicit string ""

                if(idElement === "")  
                {
                    // update the HTML element using the parameter square as
                    // the id, setting its value equal to the global variable
                    // player

                    document.getElementById(square).value = player;

                    // in array of the squares update element stored at
                    // the index retrieved above to the global variable
                    // player

                    squares[parseSquare] = player;

                }

                // call the function checkForWinner passing as an argument
                // the explicit value 'X'

                checkForWinner('X');

                // call the function checkForWinner passing as an argument
                // the explicit value 'O'

                checkForWinner('O');

                // change the player
                // write an if statement that checks if the player variable
                // is equal to O, if true, set player to X

                if(player == 'O')
                    player = 'X';

                // write the else leg that switches player from X to O

                else
                    player = 'O';

            }

            // declare function playAgain with no parameters

            function playAgain()
            {
                // create a variable that stores the response to a
                // confirm dialog box with text "Play again?"

                var response = confirm("Play again?");

                // write an if statement that evaluates the user's response
                // from above compared to true

                if (response == true) 
                {
                    // call function reset

                    reset();

                }
                // write the else leg

                else
                {
                    // display an alert dialog box that thanks the user
                    // for playing

                    alert("Thanks you for playing!");

                }
            }

            // declare function checkForWinner with one parameter called value

            function checkForWinner(value)
            {   

                // write for loop, start at index 0, loop while
                // the index less than the length of the array
                // winCombinations

                for(var i = 0; i < winCombinations.length; i++)
                {
                    // write an if statement that evaluates
                    // the squares array [] where the index is
                    // array winCombinations[][], with the first index
                    // being the looping variable and the second index 
                    // being value 0, 1, or 2, checking if it is 
                    // equal to the value parameter;
                    // this if statement should be 
                    // three statements using the logical and &&
                    // e.g. squares[windCombinations[][]]  == value &&

                    if(squares[winCombinations[i][0]] == value && squares[winCombinations[i][1]] == value && squares[winCombinations[i][2]] == value)
                    {
                        // display an alert dialog box stating which
                        // player won

                        alert(value + " " + "won");

                        // set the variable gameOver equal to true

                        gameOver == true;
                        playAgain();
                    }                   
                }

                // write an if statement checking if gameOver is true

                if(gameOver == true)
                {
                    // call function playAgain

                    playAgain();
                }
                // write the else leg
                else
                {
                // use the return statement for program control
                    return;
                }
            }
        </script>
    </head>
    <body>
        <table>
            <tr>
            <tr>
                <td><input type="button" id="sqr1" name="sqr1" class="tictac" onClick="squareClick('sqr1')" /></td>
                <td><input type="button" id="sqr2" name="sqr2" class="tictac" onClick="squareClick('sqr2')" /></td>
                <td><input type="button" id="sqr3" name="sqr3" class="tictac" onClick="squareClick('sqr3')" /></td>
            </tr>
            <tr>
                <td><input type="button" id="sqr4" name="sqr4" class="tictac" onClick="squareClick('sqr4')" /></td>
                <td><input type="button" id="sqr5" name="sqr5" class="tictac" onClick="squareClick('sqr5')" /></td>
                <td><input type="button" id="sqr6" name="sqr6" class="tictac" onClick="squareClick('sqr6')" /></td>
            </tr>
            <tr>
                <td><input type="button" id="sqr7" name="sqr7" class="tictac" onClick="squareClick('sqr7')" /></td>
                <td><input type="button" id="sqr8" name="sqr8" class="tictac" onClick="squareClick('sqr8')" /></td>
                <td><input type="button" id="sqr9" name="sqr9" class="tictac" onClick="squareClick('sqr9')" /></td>
            </tr>
        </table>
    </body>
</html>