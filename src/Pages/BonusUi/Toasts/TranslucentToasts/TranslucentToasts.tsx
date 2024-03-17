import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { TranslucentToast } from "../../../../utils/Constant";
import TranslucentToastOne from "./TranslucentToastOne";
import TranslucentToastThree from "./TranslucentToastThree";
import TranslucentToastTwo from "./TranslucentToastTwo";
import TranslucentToastFour from "./TranslucentToastFour";

const TranslucentToasts = () => {
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
          text:"class through visible toast and given directions. ",
          code:"[toast-*]"
        },
        {
          text:"through change icons colors."
        }
    ]
  return (
    <Col md="6" className="translucent">
      <Card className="overflow-hidden">
        <CommonHeader title={TranslucentToast} subTitle={subTitle} headClass="pb-0" />
        <CardBody className="toast-rtl">
          <div className="toast-container">
            <TranslucentToastOne />
            <TranslucentToastTwo />
            <TranslucentToastThree />
            <TranslucentToastFour />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TranslucentToasts;
