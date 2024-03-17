import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import ActiveList from "./ActiveList";
import { PaginationWithActiveAndDisabled } from "../../../../utils/Constant";

const ActiveDisable = () => {
  const subMenu = [
    {
      text: "Use ",
      code: ".disabled ",
    },
    {
      text: "for links that appear un-clickable and",
      code: " .active",
    },
    {
      text: " to indicate the current page.",
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader
          title={PaginationWithActiveAndDisabled}
          subTitle={subMenu}
          headClass="pb-0"
        />
        <CardBody>
          <ActiveList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveDisable;
