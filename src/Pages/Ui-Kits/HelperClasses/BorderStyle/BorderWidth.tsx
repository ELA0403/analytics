import { Col } from "reactstrap";
import { Border_Width } from "../../../../utils/Constant";
import { borderWidthData } from "../../../../Data/Ui-Kits/HelperClassData";
import { H3 } from "../../../../AbstractElements";

const BorderWidth = () => {
  return (
    <Col xxl={3} sm={6}>
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <H3 className="mb-3">{Border_Width}</H3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box border border-1" />
          <span>{".border-1"}</span>
        </div>
        {borderWidthData &&
          borderWidthData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box border ${item.class}`} />
              <span>{item.text}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};

export default BorderWidth;
