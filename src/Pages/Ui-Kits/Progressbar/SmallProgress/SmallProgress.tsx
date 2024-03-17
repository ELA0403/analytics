import { Card, CardBody, Col, Row } from "reactstrap";
import { SmallProgressBars } from "../../../../utils/Constant";
import { smallProgressData } from "../../../../Data/Ui-Kits/ProgressbarData";
import CommonHeader from "../../../../Common/CommonHeader";

const SmallProgress = () => {
  const submenuObj = [
    {
      text: "Use ",
      code: " .sm-progress-bar",
    },
    {
      text: "  class to change progress size to small:",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={SmallProgressBars} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="progress-showcase progress-b-space">
          <Row>
            <Col>
              {smallProgressData &&
                smallProgressData.map((item, index) => (
                  <div className="progress sm-progress-bar overflow-visible mt-4" key={index} >
                    <div
                      className="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
                      role="progressbar"
                      style={{ width: item.length }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="txt-primary progress-label">
                        {item.text}
                      </span>
                      <span className="animate-circle" />
                    </div>
                  </div>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallProgress;
