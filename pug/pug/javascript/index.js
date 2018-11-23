 
		  
let notificationPanel = document.getElementById("notification__panel-js");
let closePanel = document.getElementById("quit-panel-js");



if(notificationPanel && closePanel){

	closePanel.addEventListener("click",function(e){
		e.preventDefault()
		notificationPanel.remove()
	},false)

}

let titleToday = document.getElementById("title-today-js");

let notiToday = document.getElementById("notification__today-js");
	let notiTodayItem = Array.from(notiToday.querySelectorAll('div'))

	for(let i=0;i<notiTodayItem.length;i++){
		notiTodayItem[i].addEventListener("click",function(e){
			e.target.remove()

		if(notiToday.children[1] === undefined){
			titleToday.textContent= 'No hay notificaciones'
		}
		else{
			true
		}
		},false);

	}
	console.log( )
let notiTomorrow = document.getElementById("notification__tomorrow-js");
let notiTomorrowTitle = document.getElementById("notification__tomorrow-title");
	let notiTomorrowItem = Array.from(notiTomorrow.querySelectorAll('div'))

		for(let i=0;i<notiTomorrowItem.length;i++){
		notiTomorrowItem[i].addEventListener("click",function(e){
			e.target.remove()
			if(notiTomorrow.children[1] == undefined){
				notiTomorrowTitle.textContent = 'No hay notificaciones'
			}
		},false);
	}
 



