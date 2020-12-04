'use strict'
window.onload = function() {
const userScore = document.querySelector('.user-score'),
    btnBlock = document.querySelector('.btn-block'),
    ratingBlock = document.querySelector('.rating'),
    likeScore = 10,
    disLikeScore = 0;
let vote = 0,
    score = 0,
    rating = 0;
function createLine() {
    const line = document.querySelector('.rl')
    if (rating < 4) {
        clear(line);
        line.classList.add('low')
    }else if (rating > 4 && rating < 7) {
        clear(line);
        line.classList.add('middle')
    } else if (rating > 7 && rating <= 10) {
        clear(line);
        line.classList.add('high')
    }
    line.setAttribute('style', 'width: ' + (rating.toFixed(1) * 10) + '%')
}
createLine();
function clear(elem) {
    elem.classList.remove('low');
    elem.classList.remove('high');
    elem.classList.remove('middle');
}
btnBlock.addEventListener('click', function(event) {
    let target = event.target;
        if (target.classList.contains('btn-like')) {
            vote += 1;
            score += likeScore;
            rating = score / vote;
        } else if (target.classList.contains('btn-dislike')) {
            vote += 1;
            score += disLikeScore;
            rating = score / vote;
        }
        ratingBlock.textContent = rating.toFixed(1);
        createLine();
});
}
