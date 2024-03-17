import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { DefaultPaginations } from "../../../../utils/Constant";
import DefaultList from "./DefaultList";

const DefaultPagination = () => {
  const subMenu = [
    {
      text: "If the pagination component is used to navigate between a set of search results, an appropriate label could be ",
      code: 'aria-label="Search results pages',
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader title={DefaultPaginations} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <DefaultList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultPagination;
