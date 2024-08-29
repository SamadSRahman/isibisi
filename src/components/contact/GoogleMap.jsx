import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

function GoogleMap({location}) {

	 location = {
		center: { lat: 12.9458628, lng: 77.5993606 }, 
		zoom: 15,
	  };


	return (
		<div className="section">
			<div className="container">
				<div className="aximo-map-wrap">
					<div id="map">
						<GoogleMapReact
							bootstrapURLKeys={{ key: "" }}
							defaultCenter={location.center}
							defaultZoom={location.zoom}
						>
							<LocationPin lat={location.center.lat} lng={location.center.lng} />
						</GoogleMapReact>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GoogleMap;
