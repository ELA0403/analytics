import { Col } from "reactstrap";
import { Unorder_list } from "../../../../utils/Constant";
import { unOrderListData } from "../../../../Data/Ui-Kits/TypographyData";
import { H6, LI, UL } from "../../../../AbstractElements";

const UnorderList = () => {
  return (
    <Col md={6} xxl={4}>
      <div className="card-wrapper border rounded-3">
        <H6 className="sub-title fw-bold">{Unorder_list}</H6>
        <UL className="simple-list">
          {unOrderListData &&
            unOrderListData.map((item, index) => <LI key={index}>{item}</LI>)}
        </UL>
      </div>
    </Col>
  );
};

export default UnorderList;
