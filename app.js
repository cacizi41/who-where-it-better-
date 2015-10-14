//create array allImages
var allImages = [];
function Image(name) {
  this.name = name;
  this.vote = 0;
  allImages.push(this);
}
  new Image('baseball.jpg');
  new Image('skateboard.jpg');
  new Image('bicycle.jpg');
  new Image('headin.jpg');
  new Image('littlegirl.jpg');
  new Image('beatles.jpg');
  new Image('snowboard.jpg');
  new Image('robot.jpg');
  new Image('minecraft.jpg');
  new Image('gymnastic.jpg');
  new Image('bmx.jpg');
  new Image('beach.jpg');

function ranImg() {
    var ranNum = Math.floor(Math.random() * allImages.length);
    return allImages[ranNum];
}

var leftClick = document.getElementById('image1');
var rightClick = document.getElementById('image2');
var rand1, rand2;
function showPhoto(){
  do {
    rand1 = ranImg();
    rand2 = ranImg();
  } while(rand1 === rand2);
  leftClick.setAttribute('src', 'img/' + rand1.name);
  rightClick.setAttribute('src', 'img/' +  rand2.name);
}

showPhoto();

leftClick.addEventListener('click', function() {
  rand1.vote += 1;
  console.log(rand1.vote + rand1.name);
  showPhoto();
 // .innerHTML
});

rightClick.addEventListener('click',function(){
  rand2.vote += 1;
  console.log(rand2.vote + rand2.name);
  showPhoto();
  //.innerHTML
});








