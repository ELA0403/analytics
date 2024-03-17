import { Card, CardBody, Col } from "reactstrap";
import { FullscreenModals } from "../../../../utils/Constant";
import FullscreenOutline from "./FullscreenOutline";
import FullscreenBelowsm from "./FullscreenBelowsm";
import BelowMd from "./BelowMd";
import BelowLg from "./BelowLg";
import BelowXl from "./BelowXl";
import { BelowXXl } from "./BelowXXl";
import CommonHeader from "../../../../Common/CommonHeader";

const FullscreenModal = () => {
  const submenuObj = [
    {
      text: "Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a",
    },
    {
      code: ".modal-dialog.",
    },
  ];
  return (
    <Col xl={12}>
      <Card>
        <CommonHeader title={FullscreenModals} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="badge-spacing">
          <FullscreenOutline />
          <FullscreenBelowsm />
          <BelowMd />
          <BelowLg />
          <BelowXl />
          <BelowXXl />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullscreenModal;
