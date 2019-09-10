mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYW51ZWxhYiIsImEiOiJjamt0NmxpdHcwMnFyM2t0a3Mxbjh5aDFrIn0.7CcPXhDaki4-Y97DT7DYpQ';

// Initialize the map 
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-84.174500,  9.998606], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

// Encapsulate how to build the point for the map
function build_point(name, contact, tel, long, lat){
	return {
		"type":"Feature",
		"properties":{
			"title":"<h2>"+name+"</h2>",
			"description" : "<h3>Contacto:"+contact+"</h3><h3>Tel:"+tel+"</h3>"
		},
		"geometry":{
			"type":"Point",
			"coordinates":[long, lat]
		}
	};
}

// Build the list of points and info to render
var geojson = {
		"type":"geojson",
		"data":{
			"type":"FeatureCollection",
			"features":[
				build_point("Barrio San Jose, Alajuela","Edgar Palma","60564916",-84.242177, 10.013144),
				build_point("Barrio El Carmen, Alajuela ","Alina Víquez","83036267",-84.215441,  10.013313),
				build_point("Coyolar de Orotina, Alajuela","Victor Arce","87806390",-84.560223,   9.896143),
				build_point("Tárcoles, Garabito - Ecotarcoles","Raquel Parrales","89538636",-84.625626,  9.778423),
				build_point("Municipalidad de Parrita, Puntarenas","Monica Vargas","27798547",-84.3620855, 9.5292984),
				build_point("Ciruelas de San Antonio, Alajuela","Yerlyn Conejo","88871503",-84.2685808, 9.9756659),
				build_point("Biblioteca Pública Heredia ","","22378043",-84.1160985, 10.0017066),
				build_point("San Juan de Tibás, San José ","Christian Arce","86109078",-84.0907719, 9.9609617),
				build_point("Escuela Química UCR, San Pedro ","","25118520",-84.0511489, 9.9372931),
				build_point("San Vicente de Moravia, San José ","Angélica Méndez","84000764",-84.045870, 9.963131 ),
				build_point("Horquetas de Sarapiquí, Heredia ","Maribel Gutiérrez","63267789",-83.951639, 10.336138 ),
				build_point("Colegio Santo Domingo Heredia ","Noelia Gómez","72918414",-84.0916998, 9.9903904),
				build_point("San Pablo de Barva, Heredia","Mari Gonzáles","89232528",-84.123822, 10.019343 ),
				build_point("Son Josecito, San Rafael de Heredia ","Daniel Rojas","83949147",-84.1113496, 10.0145437),
				build_point("Biblioteca Pública de Cartago","","25523126",-83.923997, 9.8650112)		
			]
		}
};

// Add the points to the map
geojson.data.features.forEach(function(marker){
	var el = document.createElement('div');
  	el.className = 'marker';
	new mapboxgl.Marker(el)
	  .setLngLat(marker.geometry.coordinates)
	  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
	    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
	  .addTo(map);
});

