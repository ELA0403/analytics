import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { P } from "../../../../AbstractElements";
import { BorderRightText, BorderRights, Emailaddress } from "../../../../utils/Constant";

const BorderRight = () => {
  const subMenu = [
    {
      text: "Use the class of",
      code: ".b-r-* ",
    },
    {
      text: "for right border.",
    },
  ];
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderRights} subTitle={subMenu} headClass="border-r-secondary pb-0"/>
        <CardBody>
          <P>{BorderRightText}</P>
          <Form>
            <Label htmlFor="exampleFormControlInput1">
              {Emailaddress}
            </Label>
            <Input id="exampleFormControlInput1" type="email" placeholder="youremail@gmail.com" />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderRight;
