import { Card, CardBody, Col } from "reactstrap";
import { BasicModals } from "../../../../utils/Constant";
import SimpleModal from "./SimpleModal";
import ScrollingModal from "./ScrollingModal";
import TooltipModal from "./TooltipModal";
import CubaModal from "./CubaModal";
import CommonHeader from "../../../../Common/CommonHeader";

const BasicModal = () => {
  const submenuObj = [
    {
      text: "Different types of basic modals using like ",
      code: "simple/scrolling/tooltips/grid/varying modal",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={BasicModals} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <TooltipModal />
          <CubaModal />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModal;
