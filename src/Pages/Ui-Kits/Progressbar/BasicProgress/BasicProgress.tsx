import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { BasicProgressBars } from "../../../../utils/Constant";
import { basicProgressData } from "../../../../Data/Ui-Kits/ProgressbarData";
import CommonHeader from "../../../../Common/CommonHeader";

const BasicProgress = () => {
  const submenuObj = [
    {
      text: "Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We use the ",
      code: ".progress ",
    },
    {
      text: "as a wrapper to indicate the max value of the progress bar. The ",
      code: ".progress-bar ",
    },
    {
      text: "requires an inline style, utility class, or custom CSS to set their width.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={BasicProgressBars} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="progress-showcase">
          <Row>
            <Col>
                <Progress value={0}/>
              {basicProgressData &&
                basicProgressData.map((item, index) => (
                    <Progress value={item.length} color={item.class} key={index}>{item.length}%</Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicProgress;
