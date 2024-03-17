import { Col } from "reactstrap";
import { Text_Colors } from "../../../../utils/Constant";
import { H3 } from "../../../../AbstractElements";
import { textColorData } from "../../../../Data/Ui-Kits/HelperClassData";

const TextColor = () => {
  return (
    <Col xxl={3} sm={6}>
      <div className="border-wrapper alert-light-light h-100 dark-helper">
        <H3 className="mb-3">{Text_Colors}</H3>
        <div className="d-flex align-items-center mb-2 gap-2" >
          <div className="helper-box helper-text border txt-primary">{'C'}</div>
          <span>{".txt-primary"}</span>
        </div>
        {textColorData &&
          textColorData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box helper-text border ${item.class}`}>
                C{" "}
              </div>
              <span>{item.text}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};

export default TextColor;
