import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BorderLefts, BorderleftText, ContactNumber, MailUs, VisitUs } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";

const BorderLeft = () => {
  const subMenu = [
    {
      text: "Use the class of",
      code: ".b-l-* ",
    },
    {
      text: "for left border.",
    },
  ];
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderLefts} subTitle={subMenu} headClass="border-l-primary pb-0" />
        <CardBody>
          <P>
            {BorderleftText}
            <br />
            <strong>{VisitUs} </strong> 2600 Hollywood Blvd,Florida, United
            States- 33020
            <br />
            <strong>{MailUs}</strong>contact@us@gmail.com
            <br />
            <strong>{ContactNumber} </strong>(954) 357-7760
          </P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderLeft;
