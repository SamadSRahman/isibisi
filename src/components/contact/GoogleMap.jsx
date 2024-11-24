import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

function GoogleMap({ location }) {
  //  location = {
  // 	center: { lat: 12.9458628, lng: 77.5993606 },
  // 	zoom: 15,
  //   };

  return (
    <div className="section">
      <div className="container">
        <div className="aximo-map-wrap">
          <div id="map">
            {/* <GoogleMapReact
							bootstrapURLKeys={{ key: "" }}
							defaultCenter={location.center}
							defaultZoom={location.zoom}
						>
							<LocationPin lat={location.center.lat} lng={location.center.lng} />
						</GoogleMapReact> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.247709450029!2d77.58169077336788!3d12.940119209472293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1547269314bf%3A0xbf05902f608a70d1!2sXircular!5e0!3m2!1sen!2sin!4v1725014026139!5m2!1sen!2sin"
              width="100%"
              height="100%"
            //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
