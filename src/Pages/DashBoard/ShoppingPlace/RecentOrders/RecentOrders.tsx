import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { RecentOrder } from "../../../../utils/Constant";
import { H3 } from "../../../../AbstractElements";
import RecentOrdersTable from "./RecentOrdersTable";

const RecentOrders = () => {
  return (
    <Col xl="6">
      <Card className="invoice-card">
        <CardHeader className="pb-0">
          <H3>{RecentOrder}</H3>
        </CardHeader>
        <CardBody className="transaction-card">
          <RecentOrdersTable />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentOrders;
