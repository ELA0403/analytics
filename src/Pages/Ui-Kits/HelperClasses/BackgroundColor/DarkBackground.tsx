import { Col } from "reactstrap";
import { Dark_Background } from "../../../../utils/Constant";
import { darkBackgroundData } from "../../../../Data/Ui-Kits/HelperClassData";
import { H3 } from "../../../../AbstractElements";

const DarkBackground = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="border-wrapper h-100 border">
        <H3 className="mb-3">{Dark_Background}</H3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-primary" />
          {'.bg-primary'}
        </div>
        {darkBackgroundData &&
          darkBackgroundData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default DarkBackground;
