import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { ToastPlacements } from "../../../../utils/Constant";
import ToastPlacementsForm from "./ToastPlacementsForm";

const ToastPlacement = () => {
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
            text:"class through visible toast.",
            code:".form-select"
        },
        {text:"through select any positions."}
    ]
  return (
    <Col sm="12">
      <Card>
        <CommonHeader headClass="pb-0" title={ToastPlacements} subTitle={subTitle} /> 
        <CardBody className="toast-rtl toast-dark">
            <ToastPlacementsForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToastPlacement;
