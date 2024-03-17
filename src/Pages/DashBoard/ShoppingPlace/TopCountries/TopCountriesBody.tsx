import { H5, H6, Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { topCountriesData } from "../../../../Data/Dashboard/ShoppingPlace/TopCountries";
import { Col } from "reactstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const containerStyle = {
  height: "200px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const TopCountriesBody = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
  });
  return (
    <>
      <UL className="d-flex simple-list flex-row">
        {topCountriesData.map((data, index) => (
          <LI
            className={`light-card balance-card bg-light-${data.color}`}
            key={index}
          >
            <Image src={dynamicImage(`dashboard/${data.img}.jpg`)} alt="" />
            <div className="Countries">
              <span className={`rounded-pill badge-${data.countrybadge}`}></span>
              <H5>{data.country}</H5>
              <H6 className="mt-1 mb-0">{data.percentage}</H6>
            </div>
          </LI>
        ))}
      </UL>
      <Col xl="12" className="mt-4">
        <div className="map-js-height">
          <div id="gmap-simple" className="map-block">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              />
            ) : (
              "Loading"
            )}
          </div>
        </div>
      </Col>
    </>
  );
};

export default TopCountriesBody;
