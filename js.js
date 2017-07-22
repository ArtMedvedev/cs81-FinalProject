/**
 * Created by artmedvedev on 7/20/17.
 */

function dice() {
    var x1 = Math.ceil(Math.random()*6);
    var x2 = Math.ceil(Math.random()*6);
    var y1 = Math.ceil(Math.random()*6);
    var y2 = Math.ceil(Math.random()*6);
    var sum1 = x1+x2;
    var sum2 = y1+y2;
    document.getElementById('dice1').src = 'img/dice' + x1 + '.jpg';
    document.getElementById('dice2').src = 'img/dice' + x2 + '.jpg';
    document.getElementById('dice3').src = 'img/dice' + y1 + '.jpg';
    document.getElementById('dice4').src = 'img/dice' + y2 + '.jpg';

    if (sum1 > sum2) {
        document.getElementById('p').innerHTML = 'Winner is <b>Player</b> with result: ' + sum1;
        document.getElementById('plr').innerHTML = 'Win';
        document.getElementById('pc').innerHTML = '';
        // document.getElementById('results').innerHTML = win1 + ' : ' + win2;
        var theDiv = document.createElement('div');                // создать новый тег div
        theDiv.innerHTML = 'Player win with result: ' + sum1;      // его содержимое
        document.getElementById('raz').appendChild(theDiv);        // поместить новый тег последним в div с id="raz" (вместо this.parentNode может быть любой другой элемент DOM)
        getComputedStyle(theDiv).opacity;
        theDiv.style.opacity = '1';

    } else {
        document.getElementById('p').innerHTML = 'Winner is <b>Computer</b> with result: ' + sum2;
        document.getElementById('plr').innerHTML = '';
        document.getElementById('pc').innerHTML = 'Win';
        // document.getElementById('results').innerHTML = win1 + ' : ' + win2;
        var theDiv = document.createElement('div');                 // создать новый тег div
        theDiv.innerHTML = 'Computer win with result: ' + sum2;     // его содержимое
        document.getElementById('raz').appendChild(theDiv);         // поместить новый тег последним в div с id="raz" (вместо this.parentNode может быть любой другой элемент DOM)
        getComputedStyle(theDiv).opacity;
        theDiv.style.opacity = '1';
    }

}
