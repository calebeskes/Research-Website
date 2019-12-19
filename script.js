//var question = "What company is the creater of Pong?";
var answers = ['Sega', 'Nintendo', 'Atari', 'Microsoft'];
var answerButtons=document.getElementsByClassName("quizButton");
var correct = 2; 


for(var spot=0; spot<answers.length; spot++) 
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style', 'background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style', 'background-color:rgb(215,50,35);');
        }
    });
}

function disableAll() {
    for (var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled',true);
    }
}