const game = () => {
    let pscore = 0;
    let cscore = 0;
    const startgame = () => {
        const playbutton = document.querySelector(".intro button");
        const introscreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        playbutton.addEventListener("click", () => {
            introscreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    const playmatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerhand = document.querySelector('.Player-hand');
        const computerhand = document.querySelector('.computer-hand');
        const computeroptions = ['rock', 'paper', 'scissor'];
        options.forEach(option => {
            option.addEventListener("click", function () {
                const computernumber = Math.floor(Math.random() * 3);
                // computer choice
                const computerchoice = computeroptions[computernumber];
                // here is where decided the choice of computer
           playerhand.src=`./assets/${this.textContent}.png`;
           computerhand.src=`./assets/${computerchoice}.png`;
            });
        });
    };
    const comparehands = (playerchoice, computerchoice) => {
        const winner = documnent.querySelector('.winner');
        if (playerchoice === computerchoice) {
            winner.textcontent = 'It is a tie';
            return;
        }
        // check for rock
        if (playerchoice === 'rock') {
            if (computerchoice === 'scissor') {
                winner.textcontent = 'Player Wins!!'
                return;
            }
            else {
                winner.textcontent = 'computer Wins!!!';
                return;
            }
        }
        //check for paper
        if (playerchoice === 'paper') {
            if (computerchoice === 'scissor') {
                winner.textcontent = 'Computer wins!!'
                return;
            }
            else {
                winner.textcontent = 'Player Wins!!!';
                return;
            }
        }
        // check for scissor
        if (playerchoice === 'scissor') {
            if (computerchoice === 'rock') {
                winner.textcontent = 'Computer Wins!!'
                return;
            }
            else {
                winner.textcontent = 'Player Wins!!!';
                return;
            }
        }
    }
    startgame();
    playmatch();

    // updateScore();
};
game();