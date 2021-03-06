window.onload = init;

function init() {

	// Initialize map
	var map = L.mapbox.map('map', 'pichot.gdo5mg5o', {
  		detectRetina: true
	});

	// Add geoJSON layer for private parcels
	L.geoJson(parcels, {
		onEachFeature: bindPrivateInfo, // Call this function on each geoJSON feature
		style: { 'color': '#FF0000' }
	}).addTo(map);
	
	// Add geoJSON layer for state parcels
	L.geoJson(state_parcels, {
		onEachFeature: bindStateInfo,
		style: { 'color': '#B31453' }
	}).addTo(map);
	
	// Add search box
	new L.Control.GeoSearch({
        provider: new L.GeoSearch.Provider.Google(),
        position: 'topcenter'
    }).addTo(map);
}

// Attach an informational popup to each polygon
function bindPrivateInfo(feature, layer) {
		layer.bindPopup('Address: ' + feature.properties.Address + '<br>' +
						'City: ' + 	  feature.properties.City );	
}

function bindStateInfo(feature, layer) {
	layer.bindPopup('Description: ' + feature.properties.ownerdesc + '<br>' +
					'Lesee Name: ' + feature.properties.vn_leseenm );
}
