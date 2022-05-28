var modal = document.getElementById("myModal");
function selection(){
	var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
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
