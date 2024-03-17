import { Col } from "reactstrap";
import { Additive_Radius } from "../../../../utils/Constant";
import { additiveRadiusData } from "../../../../Data/Ui-Kits/HelperClassData";
import { H3 } from "../../../../AbstractElements";

const AdditiveRadius = () => {
  return (
    <Col xl={4} sm={12}>
      <div className="border-wrapper h-100 border">
        <H3 className="mb-3">{Additive_Radius}</H3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-radius radius-wrapper rounded" />
          {".rounded"}
        </div>
        {additiveRadiusData &&
          additiveRadiusData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-radius radius-wrapper ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default AdditiveRadius;
