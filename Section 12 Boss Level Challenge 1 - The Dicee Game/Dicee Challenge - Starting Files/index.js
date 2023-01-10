var randomNumber1 = Math.round(Math.random()*6);

document.querySelector('img1').setAttribute('src', 'images/' + 'dice'+ randomNumber1 + '.png');
document.querySelector('img2').setAttribute('src', 'images/' + 'dice'+ randomNumber1 + '.png');