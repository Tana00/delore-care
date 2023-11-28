import { useCallback, useRef } from "react";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const coordinate = { lat: -34.397, lng: 150.644 };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    // libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (!apiKey) {
    console.error("Google Maps API key is missing.");
    return "Invalid key"; // or render an error message
  }

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      {/* <LoadScript googleMapsApiKey={apiKey}> */}
      <GoogleMap
        id="map"
        mapContainerStyle={containerStyle}
        center={coordinate}
        zoom={3}
        onLoad={onMapLoad}
      ></GoogleMap>
      {/* </LoadScript> */}
    </div>
  );
};
export default Map;

// import React from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

// const GoogleMap = (props) => {
//   const mapStyles = {
//     width: "100%",
//     height: "400px",
//   };

//   const coordinate = { lat: -34.397, lng: 150.644 };

//   return (
//     <Map
//       google={props.google}
//       zoom={14} // Adjust the initial zoom level
//       style={mapStyles}
//       initialCenter={coordinate}
//     >
//       {/* Add map content here */}
//     </Map>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
// })(GoogleMap);
