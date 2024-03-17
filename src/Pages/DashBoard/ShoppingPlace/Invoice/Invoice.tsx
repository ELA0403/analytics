import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Invoices } from "../../../../utils/Constant";
import { H3 } from "../../../../AbstractElements";
import InvoiceTable from "./InvoiceTable";

const Invoice = () => {
  return (
    <Col xl="8" sm="12" className="box-col-8e order-xl-1 order-md-2">
      <Card className="invoice-card">
        <CardHeader>
          <H3>{Invoices}</H3>
        </CardHeader>
        <CardBody className="pt-0 manageorder">
          <InvoiceTable />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Invoice;
