import { Card, CardBody, Col } from "reactstrap";
import { Fw300, Fw400, Fw500, Fw600, Fw700 } from "../../../../utils/Constant";
import { H1, H2, H3, H4, H5 } from "../../../../AbstractElements";
import CommonHeader from "../../../../Common/CommonHeader";

const FontWeight = () => {
  const submenuObj = [
    {
      text: "Using ",
      code: "f-w-*",
    },
    {
      text: " class, you can change the font weight.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title="Font Weight" subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="d-flex flex-column gap-3">
          <H1 className="f-w-700">
            {"You can set bolder font weight Heading 1 using"}
            <code> {Fw700}</code>
          </H1>
          <H2 className="f-w-600">
            {"You can set bold font weight Heading 2 using"}
            <code> {Fw600}</code>
          </H2>
          <H3 className="f-w-500">
            {"You can set medium font weight Heading 3 using"}
            <code> {Fw500}</code>
          </H3>
          <H4 className="f-w-400">
            {"You can set normal font weight Heading 4 using"}
            <code> {Fw400}</code>
          </H4>
          <H5 className="f-w-300">
            {"You can set light font weight Heading 5 using"}
            <code> {Fw300}</code>
          </H5>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeight;
