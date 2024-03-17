import { Col } from "reactstrap";
import { Subtractive_Border } from "../../../../utils/Constant";
import { subtractiveData } from "../../../../Data/Ui-Kits/HelperClassData";
import { H3 } from "../../../../AbstractElements";

const SubtractiveBorder = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="border-wrapper h-100 border">
        <H3 className="mb-3">{Subtractive_Border}</H3>{" "}
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-light border border-0" />
          {".border-0"}
        </div>
        {subtractiveData &&
          subtractiveData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box bg-light border ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default SubtractiveBorder;
