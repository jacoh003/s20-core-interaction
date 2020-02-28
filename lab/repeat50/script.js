




var container = document.getElementById("container")

	for (var i = 0; i < 50; i++) {

	    var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		var sizes = Math.round(Math.random()*5);

		container.insertAdjacentHTML(`afterend`,`

		<div 
		class= "myClass"
		style="
			color= rgb( ${r}, ${g}, ${b});
			font-size=${sizes}rem;"	
		></div>
		<div 
		id= "circle"
		style="
			background-color: rgb( ${r}, ${g}, ${b});
			width:${sizes}rem;
			height:${sizes}rem;
			margin-left:20%;"
		></div>
		<div 
		id= "square"
		style="
			background-color: rgb( ${r}, ${g}, ${b});
			width:${sizes}rem;
			height:${sizes}rem;
			margin-left:20%;"
		></div>

		`) /*you can write html in the template literals*/
}




