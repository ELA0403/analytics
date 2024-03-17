import { Card, CardBody, Col, Row } from "reactstrap";
import { radioBtnData } from "../../../../Data/Buttons/GroupButtonsData";
import CommonCardHeading from "../../CommonButtons/CommonCardHeading";
import CheckBoxButton from "./CheckBoxButton";
import RadioBoxButton from "./RadioBoxButton";

const RadioBtnClass = () => {
  return (
    <>
      <Col xs={12}>
        {radioBtnData.map((item, i) => (
          <Card key={i}>
            <CommonCardHeading
              smallHeading={item.title}
              headingClassName="pb-0"
              span={item.span}
            />
            <CardBody className="btn-group-showcase radio-checkbox">
              <Row>
                {item.btnSub.map((btnItem, i) =>
                  btnItem.checkBox ? (
                    <CheckBoxButton btnItem={btnItem} key={i} />
                  ) : (
                    <RadioBoxButton btnItem={btnItem} key={i} />
                  )
                )}
              </Row>
            </CardBody>
          </Card>
        ))}
      </Col>
    </>
  );
};

export default RadioBtnClass;
