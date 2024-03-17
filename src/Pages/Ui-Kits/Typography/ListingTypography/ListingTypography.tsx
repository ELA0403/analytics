import { Card, CardBody, Col, Row } from "reactstrap";
import UnorderList from "./UnorderList";
import OrderList from "./OrderList";
import OrderListType2 from "./OrderListType2";
import { ListingTypographys } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const ListingTypography = () => {
  const submenuObj = [
    {
      text: "All typography list:- ",
      code: "<ul>",
    },
    {
      text: " , ",
      code: "<ol>",
    },
    {
      text: " & ",
      code: "<dl>",
    },
  ];
  return (
    <Col sm={12} className="listing">
      <Card>
        <CommonHeader title={ListingTypographys} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Row className="g-3">
            <UnorderList />
            <OrderList />
            <OrderListType2 />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListingTypography;
