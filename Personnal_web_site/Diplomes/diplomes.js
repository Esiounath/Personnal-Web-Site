var modal = document.getElementById("myModal");
function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
function selection(){
	var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
// 	function resize(){
// 	if(window.innerWidth < 500 && window.innerHeight < 950){magnify("myImg", 2);}
// }
// window.addEventListener('resize',resize);
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}
function moving(){
  function resize(){
if(window.innerWidth < 500 && window.innerHeight < 950){
  if(window.scrollY >= 210 && window.scrollY < 620){
    document.getElementsByTagName('img')[1].classList.add('shadow');
    document.getElementsByTagName('img')[3].classList.replace('shadow','noshadow');

  }
  else if(window.scrollY < 620){
    document.getElementsByTagName('img')[3].classList.add('shadow');
   document.getElementsByTagName('img')[1].classList.replace('shadow','noshadow');
  }
    }
  }
  window.addEventListener('resize',resize);
}
window.addEventListener('scroll',moving);
document.getElementsByTagName('img')[2].addEventListener('click',()=>{
document.getElementsByTagName('img')[2].setAttribute('id','myImg');
document.getElementsByTagName('img')[1].removeAttribute('id');
document.getElementsByTagName('img')[3].removeAttribute('id');
selection();
});
// Get the image and insert it inside the modal - use its "alt" text as a caption
document.getElementsByTagName('img')[1].addEventListener('click',()=>{
document.getElementsByTagName('img')[1].setAttribute('id','myImg');
document.getElementsByTagName('img')[2].removeAttribute('id');
document.getElementsByTagName('img')[3].removeAttribute('id');
selection();
});
document.getElementsByTagName('img')[3].addEventListener('click',()=>{
document.getElementsByTagName('img')[3].setAttribute('id','myImg');
document.getElementsByTagName('img')[1].removeAttribute('id');
document.getElementsByTagName('img')[2].removeAttribute('id');
selection();
});
document.getElementsByTagName('img')[0].addEventListener('click',()=>{
			window.location.href='../Acceuille/index.html';
		});
window.addEventListener('scroll',()=>{
  console.log(window.scrollY)
	if(window.scrollY > 233){
		document.getElementsByTagName('img')[0].style.transition = '2s.ease';
		document.getElementsByTagName('img')[0].style.opacity = '0';
	}
	else if(window.scrollY > 653){
				document.getElementsByTagName('img')[0].style.transition = '2s.ease';
		document.getElementsByTagName('img')[0].style.opacity = '0';
				document.getElementsByTagName('img')[1].style.transition = '2s.ease';
		document.getElementsByTagName('img')[1].style.opacity = '0';
	}
	else{
						document.getElementsByTagName('img')[0].style.transition = '2s.ease';
		document.getElementsByTagName('img')[0].style.opacity = '1';
				document.getElementsByTagName('img')[1].style.transition = '2s.ease';
		document.getElementsByTagName('img')[1].style.opacity = '1';
	}
});
