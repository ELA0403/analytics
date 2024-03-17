import { Col } from "reactstrap";
import { Light_Backgrounds } from "../../../../utils/Constant";
import { lightBackgroundData } from "../../../../Data/Ui-Kits/HelperClassData";
import { H3 } from "../../../../AbstractElements";

const LightBackground = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="border-wrapper h-100 border">
        <H3 className="mb-3">{Light_Backgrounds}</H3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box alert-light-primary" />
          {'.alert-light-primary'}
        </div>
        {lightBackgroundData &&
          lightBackgroundData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default LightBackground;
