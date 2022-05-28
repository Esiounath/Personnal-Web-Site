var textPosition = 0 ;
var background = ['https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465','https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469','https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074'];
var speed = 70 
var titre = ["Collège Janusz Korczak 94450 Limeil-Brévannes","CFA Saint-Maur-des-Fossés","Lycée Polyvalent Samuel de Champlain","ESME SUDRIA","Ensemble Sainte-Marie Pôle STS"];
var specialite = ["Certficat Aptitude Professionelle <br><span>(option Installateur Sanitaire)<span>","Baccalauréat Professionnel MELEC <br><span>(option Métiers de l'électricité et de ses environments connectés)</span>","Brevet Technicien Supérieur Système Numérique <br><span>(option Informatique & Réseaux)</span>","Brevet Technicien Supérieur Services Informatique aux organisations<br><span>(option Solutions Logiciels Applications Métiers)</span>"];
var animation = setInterval((e)=>{
	var randomPicture = Math.floor(Math.random() * background.length);
	document.body.style.transition = '2.5s';
	document.body.style.background = 'url('+background[randomPicture]+')';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
},3000);
function typewriter(){
	document.getElementsByTagName('p')[0].innerHTML = titre[0].substring(0,textPosition);
	document.getElementsByTagName('p')[1].innerHTML = titre[1].substring(0,textPosition) + '<br>' + specialite[0].substring(0,textPosition);
	document.getElementsByTagName('p')[2].innerHTML = titre[2].substring(0,textPosition) + '<br>' + specialite[0].substring(0,textPosition);
	document.getElementsByTagName('p')[3].innerHTML = titre[2].substring(0,textPosition) + '<br>' + specialite[1].substring(0,textPosition);
	document.getElementsByTagName('p')[4].innerHTML = titre[3].substring(0,textPosition) + '<br>' + specialite[2].substring(0,textPosition);
	document.getElementsByTagName('p')[5].innerHTML = titre[4].substring(0,textPosition) + '<br>' + specialite[3].substring(0,textPosition);
	if(textPosition++ != specialite[3].length){
		setTimeout(typewriter,speed);
	}
}
window.addEventListener('load',typewriter);
document.getElementsByTagName('p')[0].addEventListener('click',()=>{
	clearInterval(animation);
		document.body.style.transition = '2.5s';
	document.body.style.background = 'url(https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469)';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
});
document.getElementsByTagName('p')[1].addEventListener('click',()=>{
	clearInterval(animation);
		document.body.style.transition = '2.5s';
	document.body.style.background = 'url(https://images.unsplash.com/photo-1530124566582-a618bc2615dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470)';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
});
document.getElementsByTagName('p')[2].addEventListener('click',()=>{
	clearInterval(animation);
		document.body.style.transition = '2.5s';
	document.body.style.background = 'url(https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470)';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
});
document.getElementsByTagName('p')[3].addEventListener('click',()=>{
	clearInterval(animation);
		document.body.style.transition = '2.5s';
	document.body.style.background = 'url(https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470)';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
});
document.getElementsByTagName('p')[4].addEventListener('click',()=>{
	clearInterval(animation);
		document.body.style.transition = '2.5s';
	document.body.style.background = 'url(https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470)';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
});

document.getElementsByTagName('p')[5].addEventListener('click',()=>{
	clearInterval(animation);
		document.body.style.transition = '2.5s';
	document.body.style.background = 'url(https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47ocecukh9rf30x8x5ou166z942hvqg0zdxaxqjbos&rid=giphy.gif&ct=g)';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
});
document.getElementsByTagName('img')[0].addEventListener('click',()=>{
	window.location.href = "../Acceuille/index.html";
})
        function resize(){
        	if(window.innerWidth < 500 && window.innerHeight < 950){
        		scroll();
        		window.addEventListener('scroll',scroll);
        		document.getElementsByTagName('p')[5].addEventListener('click',()=>{
	clearInterval(animation);
		document.body.style.transition = '2.5s';
	document.body.style.background = 'url(https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687)';
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
});

        		}
    }
        window.addEventListener('resize',resize);
function scroll(){
	if(window.scrollY > 95){
		document.getElementsByTagName('img')[0].style.transition = '2s.ease';
		document.getElementsByTagName('img')[0].style.opacity = '0';
	}
	else{
		document.getElementsByTagName('img')[0].style.transition = '2s.ease';
		document.getElementsByTagName('img')[0].style.opacity = '1';
	}
}
