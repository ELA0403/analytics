import { Card, CardBody, CardFooter, Col } from "reactstrap";
import { Orders } from "../../../../utils/Constant";
import OrderBody from "./OrderBody";
import OrderFooterTable from "./OrderFooterTable";
import CommonHeader from "../../../../Common/CommonHeader";

const Order = () => {
  const submenuObj = [
    {
      text: "Using ",
      code: ".row.order ",
    },
    {
      text: "class, you can set the order position.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Orders} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="grid-showcase">
          <OrderBody />
        </CardBody>
        <CardFooter>
          <OrderFooterTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Order;
