import { Card, CardBody, Col } from "reactstrap";
import { ToggleBetweenModals } from "../../../../utils/Constant";
import ToggleModalBody from "./ToggleModalBody";
import CommonHeader from "../../../../Common/CommonHeader";

const ToggleModal = () => {
  const submenuObj = [
    {
      text: "Toggle between multiple modals with some clever placement of the ",
      code: "data-bs-target ",
    },
    {
      text: "and",
      code: "data-bs-toggle",
    },
    {
      text: " attributes.",
    },
  ];
  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title={ToggleBetweenModals} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <ToggleModalBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToggleModal;
