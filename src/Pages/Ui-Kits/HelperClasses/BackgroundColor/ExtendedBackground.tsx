import { Col } from "reactstrap";
import { Extended_Background, Light_Background, Light_card } from "../../../../utils/Constant";
import { H3 } from "../../../../AbstractElements";

const ExtendedBackground = () => {
  return (
    <Col xl={4} sm={12}>
      <div className="border-wrapper h-100 border">
        <H3 className="mb-3">{Extended_Background}</H3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box light-card" />
          {Light_card}
        </div>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box light-background border" />
          {Light_Background}
        </div>
      </div>
    </Col>
  );
};

export default ExtendedBackground;
