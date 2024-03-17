import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { customHeightData } from "../../../../Data/Ui-Kits/ProgressbarData";
import { CustomHeightProgressBars } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const CustomHeightProgress = () => {
  const submenuObj = [
    {
      text: "Set a height value on the ",
      code: ".progress-bar",
    },
    {
      text: ", so if you change that value the outer",
      code: ".progress",
    },
    {
      text: " will automatically resize accordingly.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={CustomHeightProgressBars} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="progress-showcase">
          <Row>
            <Col>
                <Progress value={25} color="primary" style={{height : 1}}/>
              {customHeightData &&
                customHeightData.map((item, index) => (
                    <Progress value={item.length} color={item.class} style={{height : item.text}} key={index}/>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomHeightProgress;
