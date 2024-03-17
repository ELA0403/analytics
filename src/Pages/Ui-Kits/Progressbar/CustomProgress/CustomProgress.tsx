import  { Fragment } from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { CustomProgressBars } from "../../../../utils/Constant";
import { customProgressData } from "../../../../Data/Ui-Kits/ProgressbarData";
import { H6 } from "../../../../AbstractElements";
import CommonHeader from "../../../../Common/CommonHeader";

const CustomProgress = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".progress-bar-animated ",
    },
    {
      text: "and ",
      code: ".progress-bar-striped ",
    },
    {
      text: "to animate the stripes right to left.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={CustomProgressBars} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <H6 className="mb-2">{'0% Getting Started'} </H6>
              <Progress value={0} className="mb-4" />
              {customProgressData &&
                customProgressData.map((item, index) => (
                  <Fragment key={index}>
                    <H6 className="mb-2">{item.text} </H6>
                    <Progress value={item.length} className="mb-4" striped={item.strip} color={item.class} animated={item.strip}>{item.length}</Progress>
                  </Fragment>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomProgress;
