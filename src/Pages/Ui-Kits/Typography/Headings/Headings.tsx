import { Card, CardBody, Col } from "reactstrap";
import HeadingsBody from "./HeadingsBody";
import { Heading } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const Headings = () => {
    const submenuObj = [
        {
            text: "All HTML headings, ",
            code: '<h1>'
        },
        {
            text: ' through',
            code: '<h6>'
        }, {
            text: ', are available.'
        }
    ]
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonHeader title={Heading} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <HeadingsBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Headings;
