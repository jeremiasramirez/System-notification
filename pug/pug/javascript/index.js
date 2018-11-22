 
		  
let notificationPanel = document.getElementById("notification__panel-js");
let closePanel = document.getElementById("quit-panel-js");
 

if(notificationPanel && closePanel){

	closePanel.addEventListener("click",function(e){
		e.preventDefault()
		notificationPanel.remove()
	},false)

}