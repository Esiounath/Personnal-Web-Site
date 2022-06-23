const items = document.querySelectorAll('img');
		const nbSlide = items.length ;
		var count = 1 ;
		function slideSuivant(){
			items[count].classList.remove('active');
			if (count < nbSlide -1) {
				count++;
			}
			else{
				count = 1 ;
			}
			items[count].classList.add('active');
		}
		function slidePrecedent(){
			items[count].classList.remove('active');
			if (count > 1) {
				count--;
			}
			else{
				count = nbSlide -1 ;
			}
			items[count].classList.add('active');
		}
		var slide = setInterval((e)=>{
			items[count].classList.remove('active');
			if (count < nbSlide -1) {
				count++;
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
         items[count].style.backgroundColor = 'rgba(255.255.255.1)';
			}
			else if (count > nbSlide -items.length){
				count = 1 ;
	
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
         items[count].style.backgroundColor = 'rgba(255.255.255.1)';
			}
			else if (count > 1) {
				count--;
	
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
         items[count].style.backgroundColor = 'rgba(255.255.255.1)';
			}
			else{
				count = nbSlide -1 ;
	
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
	items[count].style.backgroundColor = 'rgba(255.255.255.1)';
				
			}
			items[count].classList.add('active');
		},4000);
		function keyPress(e){
			if (e.keyCode === 37) {
			        clearInterval(slide);
				slidePrecedent();

			}
			else if(e.keyCode === 39)
			{
			       clearInterval(slide);
				slideSuivant();

			}
			else if(e.keyCode === 32)
			{
				clearInterval(slide);
			}
		}
				  /*document.getElementsByTagName("svg")[0].addEventListener('click',()=>{
		  		clearInterval(slide);
                       slideSuivant();

			});*/
			/*document.getElementsByTagName('svg')[1].addEventListener('click',()=>{
				clearInterval(slide);

			});
			document.getElementsByTagName('svg')[3].addEventListener('click',()=>{
				setInterval(slide,4000);

			});
        document.getElementsByTagName('svg')[2].addEventListener('click',()=>{
        				clearInterval(slide);
                        slidePrecedent();

			});*/
        document.addEventListener('keydown',keyPress);
        var speed = 80
        var textPosition = 0 
        var message = ["Bienvenue sur mon site personnel<br>","Je m\'appelle Eden Siounath actuellement étudiant informaticien <br> Dévéloppeur Back-end & Front-end  <br> Je souhaiterais m'orienter dans la cybersécurité en tant que dévéloppeur logiciels sécurité.","Eden Siounath"]
        function typewriter(){
        	var presentation = document.getElementsByTagName('p')[0]
        	var description = document.getElementsByTagName('p')[1]
        	presentation.innerHTML = message[0].substring(0,textPosition);
        	description.innerHTML = message[1].substring(0,textPosition);
        	document.getElementsByTagName('h1')[0].innerHTML = message[2].substring(0,textPosition);
        	if(textPosition++ != message[1].length){
        		setTimeout(typewriter,speed);
        	}

        }
        window.addEventListener('load',typewriter);
        window.addEventListener('scroll',()=>{
        	if(window.scrollY >= 51){
        		document.getElementsByTagName('img')[0].style.transition = "2s";
        		document.getElementsByTagName('img')[0].style.opacity = "0";
        		document.getElementsByTagName('img')[1].style.transition = "2s";
        		document.getElementsByTagName('img')[1].style.opacity = "0";
        	}
        	else{
        			document.getElementsByTagName('img')[0].style.transition = "2s";
        		document.getElementsByTagName('img')[0].style.opacity = "1";
        		document.getElementsByTagName('img')[1].style.transition = "2s";
        		document.getElementsByTagName('img')[1].style.opacity = "1";
        	}
        });
        /*function resize(){
        	if(window.innerWidth < 500 && window.innerHeight < 950){
        		if(document.getElementsByTagName('svg').length == 4){
        			document.getElementsByTagName('svg')[0].remove();
        			document.getElementsByTagName('svg')[0].remove();
        			document.getElementsByTagName('svg')[0].remove();
        			document.getElementsByTagName('svg')[0].remove();
        		}
        		}
    }*/
    var color = ["red","yellow","blue","green","purple","pink","grey"];
    colorRand = Math.floor(Math.random * color.length);
   document.getElementsByTagName('li')[1].addEventListener('click',()=>{
   	document.getElementsByTagName('button')[1].style.color = color[colorRand];
   })
    //window.addEventListener('resize',resize);
