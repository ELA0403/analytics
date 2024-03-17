import { Card, CardBody, Col } from "reactstrap";
import { fontStyleData } from "../../../../Data/Ui-Kits/HelperClassData";
import { P } from "../../../../AbstractElements";
import CommonHeader from "../../../../Common/CommonHeader";

const FontStyle = () => {
  const submenuObj = [
    {
      text: "Use the font-style like: ",
      code: " .f-s-* [normal/italic/oblique/initial/inherit]",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title="Font-Style" subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <P className='f-s-normal'>
            {'This is a .f-s-normal font-style'}
          </P>
          {fontStyleData &&
            fontStyleData.map((item, index) => (
              <P className={item.class} key={index}>
                {item.text}
              </P>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontStyle;
