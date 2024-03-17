import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { LiveToasts } from "../../../../utils/Constant";
import TopRightToast from "./TopRightToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
import BottomLeftToast from "./BottomLeftToast";

const LiveToast = () => {
    const subTitle = [
        {
            text:"Use the",
            code:".hide"
        },
        {
            text:"class through hide toast and ",
            code:".show"
        },
        {
            text:"class through visible toast and given directions.",
            code:"[top-0/bottom-0/start-0/end-0]"
        }
    ]
  return (
    <Col md="6">
      <Card>
        <CommonHeader title={LiveToasts} subTitle={subTitle} headClass="pb-0"/>
        <CardBody className="position-relative common-flex">
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />l
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveToast;
