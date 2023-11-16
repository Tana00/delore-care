import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const coordinate = { lat: -34.397, lng: 150.644 };
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinate}
          zoom={3}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map;
