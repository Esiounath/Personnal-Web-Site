document.getElementsByTagName('img')[0].addEventListener('click',()=>{
	window.location.href = '../Acceuille/index.html';
});
var picture = ['https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=639','https://images.unsplash.com/photo-1528845922818-cc5462be9a63?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1ldGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500','https://images.unsplash.com/photo-1618826470964-f6f8b3ae52aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687','https://images.unsplash.com/photo-1505832773278-f0d50c13dbe0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710','https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687','https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665','https://images.unsplash.com/photo-1593941707882-a5bba14938c7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472','https://images.unsplash.com/photo-1530124566582-a618bc2615dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470','https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470','https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'];
var animation = setInterval((e)=>{
	var random = Math.floor(Math.random() * picture.length);
	document.body.style.transition = '2.5s';
	document.body.style.background = 'url('+picture[random]+')';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
},3000);
		const nbSlide = document.getElementsByTagName('section').length ;
		var count = 0 ;
		var slide = setInterval((e)=>{
			document.getElementsByTagName('section')[count].classList.remove('active');
			if (count < nbSlide -1) {
				count++;
			}
			else if (count > nbSlide - document.getElementsByTagName('section').length){
				count = 1 ;
	
			}
			else if (count > 1) {
				count--;
			}
			else{
				count = nbSlide - 1 ;
				
			}
			document.getElementsByTagName('section')[count].classList.add('active');
		},5000);
		function keyPress(e){
			if(e.keyCode == 32)
			{
				clearInterval(slide);
				for(i in document.getElementsByTagName('section').length){
				document.getElementsByTagName('section')[i].classList.remove('active'); 
			}
										 document.getElementsByTagName('section')[0].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[1].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[3].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[4].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[5].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[2].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[6].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[0].style.opacity = '1';
							 document.getElementsByTagName('section')[1].style.opacity = '1';
							 document.getElementsByTagName('section')[3].style.opacity = '1';
							 document.getElementsByTagName('section')[4].style.opacity = '1';
							 document.getElementsByTagName('section')[5].style.opacity = '1';
							 document.getElementsByTagName('section')[2].style.opacity = '1';
							 document.getElementsByTagName('section')[6].style.opacity = '1';
			}
		}
		document.addEventListener('keydown',keyPress);
		window.addEventListener('scroll',()=>{
			// console.log(window.scrollY);
			if(window.scrollY > 210){
				document.getElementsByTagName('img')[0].style.transition = '2s.ease';
				document.getElementsByTagName('img')[0].style.opacity = '0';
								document.getElementsByTagName('button')[0].style.transition = '2s.ease';
				document.getElementsByTagName('button')[0].style.opacity = '0';
			}
			else{
							document.getElementsByTagName('img')[0].style.transition = '2s.ease';
				document.getElementsByTagName('img')[0].style.opacity = '1';	
				document.getElementsByTagName('button')[0].style.transition = '2s.ease';
				document.getElementsByTagName('button')[0].style.opacity = '1';	
			}
		});
		document.getElementsByTagName('button')[0].addEventListener('click',()=>{
							clearInterval(slide);
				for(i in document.getElementsByTagName('section').length){
				document.getElementsByTagName('section')[i].classList.remove('active'); 
			}
										 document.getElementsByTagName('section')[0].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[1].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[3].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[4].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[5].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[2].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[6].style.transition = '3s.ease';
							 document.getElementsByTagName('section')[0].style.opacity = '1';
							 document.getElementsByTagName('section')[1].style.opacity = '1';
							 document.getElementsByTagName('section')[3].style.opacity = '1';
							 document.getElementsByTagName('section')[4].style.opacity = '1';
							 document.getElementsByTagName('section')[5].style.opacity = '1';
							 document.getElementsByTagName('section')[2].style.opacity = '1';
							 document.getElementsByTagName('section')[6].style.opacity = '1';
		});