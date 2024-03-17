import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { ProgressStriped } from "../../../../utils/Constant";
import { stripedProgressData } from "../../../../Data/Ui-Kits/ProgressbarData";
import CommonHeader from "../../../../Common/CommonHeader";

const StripedProgress = () => {
  const submenuObj = [
    {
      text: "Add ",
      code: ".progress-bar-striped",
    },
    {
      text: " to any ",
      code: ".progress-bar ",
    },
    {
      text: " to apply a stripe via CSS gradient over the progress bar's background color Using CSS Effects.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={ProgressStriped} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="body progress-showcase">
          <Row>
            <Col>
                <Progress striped value={10} color="primary" />
              {stripedProgressData &&
                stripedProgressData.map((item, index) => (
                    <Progress striped value={item.length} color={item.class} key={index} />
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StripedProgress;
