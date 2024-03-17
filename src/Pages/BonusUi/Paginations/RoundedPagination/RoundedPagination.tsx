import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import RoundedList from "./RoundedList";
import { RoundedPaginations } from "../../../../utils/Constant";

const RoundedPagination = () => {
  const subMenu = [
    {
      text: "Used in rounded pagination.Use an icon or symbol in place of text for some pagination links.",
      code: "[.rounded-circle]",
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader title={RoundedPaginations} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <RoundedList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoundedPagination;
