/// <reference types="@types/googlemaps" />

export class CustomMap {
	// saying that google map is going to be an instance of that class
	private googleMap: google.maps.Map;

	constructor(elementId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(elementId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}
}
