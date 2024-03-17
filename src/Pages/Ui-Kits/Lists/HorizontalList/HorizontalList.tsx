import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Checkout, Horizontallists, Megaoptions, Paymentdetails, Pricing, Product, Productdetails } from "../../../../utils/Constant";
import HorizontalListsBody from "./HorizontalListsBody";
import CommonHeader from "../../../../Common/CommonHeader";

const HorizontalList = () => {
  const submenuObj = [
    {
      text: "Use ",
      code: ".list-group-horizontal",
    },
    {
      text: "to change the layout of list group items from vertical to horizontal across all breakpoints.",
      code: ".list-group-horizontal-[sm/md/lg/xl/xxl].",
    },
  ];
  return (
    <Col xxl={6} xs={12} className="box-col-12">
      <Card className="height-equal">
        <CommonHeader title={Horizontallists} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <div className="horizontal-list-wrapper dark-list">
            <ListGroup className="fw-bold list-group list-group-horizontal-sm pb-2">
                <ListGroupItem className="border-left-primary">{Product} </ListGroupItem>
                <ListGroupItem >{Productdetails}</ListGroupItem>
                <ListGroupItem >{Pricing}</ListGroupItem>
                <ListGroupItem >{Paymentdetails}</ListGroupItem>
                <ListGroupItem >{Checkout} </ListGroupItem>
                <ListGroupItem >{Megaoptions} </ListGroupItem>
            </ListGroup>
            <HorizontalListsBody />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalList;
