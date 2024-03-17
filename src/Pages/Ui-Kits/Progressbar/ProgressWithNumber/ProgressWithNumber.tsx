import { Button, Card, CardBody, Col, Progress } from "reactstrap";
import { ProgressWithNumberSteps } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const ProgressWithNumber = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".position-absolute ",
    },
    {
      text: "to set progress numbers steps.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={ProgressWithNumberSteps} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="position-relative m-3 progress-number">
            <Progress className="progress-wrapper">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Progress"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </Progress>
            <Button color="primary" className="position-absolute top-0 start-0 translate-middle btn-sm btn-primary rounded-circle"  >
              1
            </Button>
            <Button color="primary" className="position-absolute top-0 start-50 translate-middle btn-sm btn-primary rounded-circle" >
              2
            </Button>
            <Button color="transparent" className="progress-btn position-absolute top-0 start-100 translate-middle btn-sm rounded-circle btn-transparent" >
              3
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProgressWithNumber;
