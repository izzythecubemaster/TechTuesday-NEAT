var NEAT;
var word = "Tech Tuesday!";

window.onload = function(){
	var start = function(){
		NEAT = new Neuroevolution({
			population: 10,
			network:[nbSensors, [9], 2],
			randomBehaviour:0.1,
			mutationRate:0.5, 
			mutationRange:2, 
		});
	}
}