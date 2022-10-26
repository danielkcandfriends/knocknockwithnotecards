var easyCards = [
    'https://i.imgur.com/Eg7JzeC.png',
    'https://i.imgur.com/9Faiq0r.png',
    'https://i.imgur.com/s43rXo6.png',
    'https://i.imgur.com/DfCdcJj.png',
    'https://i.imgur.com/V85TQ8N.png',
    'https://i.imgur.com/0ENRPXH.png',
    
    'https://i.imgur.com/YRp9fVP.png',
'https://i.imgur.com/Mi0etEF.png',
    'https://i.imgur.com/8uWX9NJ.png',
    'https://i.imgur.com/qOAVOeM.png',
    'https://i.imgur.com/DdDApOO.png',
    'https://i.imgur.com/08TXEPZ.png',
    'https://i.imgur.com/Mi0etEF.png',
    'https://i.imgur.com/ftmNKVQ.png',
    'https://i.imgur.com/S9XUJn5.png',
    'https://i.imgur.com/FgfSEbJ.png',
    'https://i.imgur.com/PozIFCs.png',
    'https://i.imgur.com/egEfKyT.png',
    
    'https://i.imgur.com/pRWs1QF.png',
    
    ]
var mediumCards = [
    'https://i.imgur.com/GnGCCgt.png',
    'https://i.imgur.com/qWlIr7p.png',
    'https://i.imgur.com/wFd2Fkq.png',
   'https://i.imgur.com/1qAouzI.png',
    
'https://i.imgur.com/5nqYeyW.png',
    'https://i.imgur.com/hTRVFwa.png',
    
    ]
var easyMediumCards = easyCards.concat(mediumCards);
var hardCards = [
    'https://i.imgur.com/Cf5el2Z.png',
    'https://i.imgur.com/sL9BHVq.png',
    'https://i.imgur.com/hvGe8Wi.png',
    'https://i.imgur.com/cFszvte.png',
    'https://i.imgur.com/p60Uzj3.png',
'https://i.imgur.com/icM1p6p.png',
    'https://i.imgur.com/pOIsJoQ.png',  
    'https://i.imgur.com/cM5vEm2.png'
    ]
var easyMediumHard = easyMediumCards.concat(hardCards);
var expertCards = [
 
    'https://i.imgur.com/zHyiM9o.png',
    'https://i.imgur.com/um9QP7s.png',
       'https://i.imgur.com/Ct8BSX3.png',
    'https://i.imgur.com/d5JQm8p.png',
       'https://i.imgur.com/WHVq7Yt.png',
    'https://i.imgur.com/9v30FEy.png',
    
    'https://i.imgur.com/o4Lxw0g.png',
    'https://i.imgur.com/RXCXaRf.png',
    'https://i.imgur.com/6uDtbAp.png',
    'https://i.imgur.com/WziI0CP.png',
    'https://i.imgur.com/ZK4Dw6d.png',
    'https://i.imgur.com/PxSaLFG.png',
    'https://i.imgur.com/LK5UsYH.png',
    'https://i.imgur.com/fkIwYz3.png',
    'https://i.imgur.com/j8R9AoD.png',
    'https://i.imgur.com/2aavCjV.png',
    'https://i.imgur.com/XAgLEak.png',
    ]
var noteCards = [
    'https://i.imgur.com/1qAouzI.png',
       'https://i.imgur.com/YRp9fVP.png',
'https://i.imgur.com/Mi0etEF.png',
    'https://i.imgur.com/8uWX9NJ.png',
    'https://i.imgur.com/qOAVOeM.png',
    'https://i.imgur.com/DdDApOO.png',
    'https://i.imgur.com/08TXEPZ.png',
    'https://i.imgur.com/Mi0etEF.png',
    'https://i.imgur.com/ftmNKVQ.png',
'https://i.imgur.com/5nqYeyW.png',
    'https://i.imgur.com/hTRVFwa.png',
     'https://i.imgur.com/p60Uzj3.png',
'https://i.imgur.com/icM1p6p.png',
    'https://i.imgur.com/pOIsJoQ.png',  
    'https://i.imgur.com/cM5vEm2.png',
    'https://i.imgur.com/WziI0CP.png',
    'https://i.imgur.com/ZK4Dw6d.png',
    'https://i.imgur.com/PxSaLFG.png',
    'https://i.imgur.com/LK5UsYH.png',
    'https://i.imgur.com/fkIwYz3.png',
    'https://i.imgur.com/j8R9AoD.png',
    'https://i.imgur.com/2aavCjV.png',
    'https://i.imgur.com/XAgLEak.png',
    'https://i.imgur.com/egEfKyT.png',
    
    'https://i.imgur.com/pRWs1QF.png',
    'https://i.imgur.com/WziI0CP.png',
    'https://i.imgur.com/ZK4Dw6d.png',
    'https://i.imgur.com/PxSaLFG.png',
    'https://i.imgur.com/LK5UsYH.png',
    'https://i.imgur.com/fkIwYz3.png',
    'https://i.imgur.com/j8R9AoD.png',
    'https://i.imgur.com/2aavCjV.png',
    'https://i.imgur.com/XAgLEak.png',
    ]
var lvl34Cards = hardCards.concat(expertCards);
var lvl1234Cards = easyMediumHard.concat(expertCards);
window.onload = function () {

    function sliderChange() {
        var slider = document.getElementById('difficulty'),
            easy = document.getElementsByClassName('easy'),
            medium = document.getElementsByClassName('medium'),
            easymedium = document.getElementsByClassName('easymedium'),
            hard = document.getElementsByClassName('hard'),
            easymediumhard = document.getElementsByClassName('easymediumhard'),
            expert = document.getElementsByClassName('expert'),
            lvl34 = document.getElementsByClassName('lvl34'),
            lvl1234 = document.getElementsByClassName('lvl1234'),
         notecards = document.getElementsByClassName('notecards');
        slider.onchange = function() {
            if (slider.value == '0') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'inline-block';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '1') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'inline-block';
                    easymedium[0].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '2') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'inline-block';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '3') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'inline-block';
                    easymediumhard[0].style.display = 'none';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '4') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'inline-block';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '5') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'inline-block';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '6') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'inline-block';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '7') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'inline-block';
                     notecards[i].style.display = 'none';
                }
            }
            else if (slider.value == '8') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                    lvl34[i].style.display = 'none';
                    lvl1234[i].style.display = 'none';
                     notecards[i].style.display = 'inline-block';
                }
            }
        }
        slider.defaultValue = '1';
    }
    sliderChange();

    function pullCard() {
        var cardContainer = document.getElementById('card_pull'),
            message = document.getElementById('pull_card'),
            slider = document.getElementById('difficulty'),
            cardImage = document.createElement('img');
        cardContainer.onclick = function () {
            message.style.display = 'none';
            if (slider.value == '0') {
                cardContainer.style.background = '#F36024';
                var number = Math.floor(Math.random()*easyCards.length);
                cardImage.src = easyCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '1') {
                cardContainer.style.background = '#42BFAE';
                var number = Math.floor(Math.random()*mediumCards.length);
                cardImage.src = mediumCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '2') {
                cardContainer.style.background = '#42BFAE';
                var number = Math.floor(Math.random()*easyMediumCards.length);
                cardImage.src = easyMediumCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '3') {
                cardContainer.style.background = '#2861AC';
                var number = Math.floor(Math.random()*hardCards.length);
                cardImage.src = hardCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '4') {
                cardContainer.style.background = '#2861AC';
                var number = Math.floor(Math.random()*easyMediumHard.length);
                cardImage.src = easyMediumHard[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '5') {
                cardContainer.style.background = '#ABC54A';
                var number = Math.floor(Math.random()*expertCards.length);
                cardImage.src = expertCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '6') {
                cardContainer.style.background = '#ABC54A';
                var number = Math.floor(Math.random()*lvl34Cards.length);
                cardImage.src = lvl34Cards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '7') {
                cardContainer.style.background = '#ABC54A';
                var number = Math.floor(Math.random()*lvl1234Cards.length);
                cardImage.src = lvl1234Cards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
             if (slider.value == '8') {
                cardContainer.style.background = '#ABC54A';
                var number = Math.floor(Math.random()*noteCards.length);
                cardImage.src = noteCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
        }
    }
    pullCard();

}