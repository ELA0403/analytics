import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { stripedProgressData } from "../../../../Data/Ui-Kits/ProgressbarData";
import { Progressanimated } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const AnimetedProgress = () => {
  const submenuObj = [
    {
      text: "The striped gradient can also be animated. Add ",
      code: ".progress-bar-animated",
    },
    {
      text: " to",
      code: ".progress-bar",
    },
    {
      text: " to animate the stripes right to left via CSS3 animations.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={Progressanimated}
          subTitle={submenuObj}
          headClass="pb-0"
        />
        <CardBody className=" progress-showcase">
          <Row>
            <Col>
              <Progress striped animated value={10} color="primary" />
              {stripedProgressData &&
                stripedProgressData.map((item, index) => (
                  <Progress
                    striped
                    animated
                    value={item.length}
                    color={item.class}
                    key={index}
                  />
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimetedProgress;
