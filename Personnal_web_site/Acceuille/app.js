var modal = document.getElementById("myModal");
var captionText = document.getElementById("caption");
function selection(){
	var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
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
function keyPress(e){
  if(e.keyCode === 27){
    modal.style.display = "none";
  }
}
modal.addEventListener('scroll',()=>{
  function resize(){
    if(window.innerWidth < 500 && window.innerHeight < 950){
  if(window.scrollY >= 20 || window.scrollY <= 20){
    modal.style.display = "none";
  }
}
}
document.addEventListener('resize',resize);
});
document.getElementById('myModal').addEventListener('click',()=>{
modal.style.display = "none";
});
 document.addEventListener('keydown',keyPress);
 var img = document.getElementById('img01');
 var count = 1 ;
 var value = document.querySelectorAll('img');
 var nbSlide = value.length - 1 ;
 // div1.getAttribute('id');
 function Next(e){
  var name = ["BREVET PROFESSIONNELS MELEC","CAP INSTALLATEUR SANITAIRE","BACCALAURÉAT PROFESSIONNELS MELEC"];
  captionText.innerHTML = name[count - 1];
  if(e.keyCode === 37){
    img.setAttribute('src',document.getElementsByTagName('img')[count].getAttribute('src'));
  if (count < nbSlide - 1) {
        count++;
      }
      else{
        count = 1 ;
      }
  }
  else if(e.keyCode === 39){
        img.setAttribute('src',document.getElementsByTagName('img')[count].getAttribute('src'));
      if (count > 1) {
        count--;
      }
      else{
        count = nbSlide - 1 ;
      }
  }
 }
 document.addEventListener('keydown',Next);
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
