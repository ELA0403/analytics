import { Card, CardBody, Col } from "reactstrap";
import { fontSizeData } from "../../../../Data/Ui-Kits/HelperClassData";
import { FontsSizes } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const FontSize = () => {
  const submenuObj = [
    {
      text: "Use the font-size for ",
      code: ".f-* [14/16/18/20/22/24/26/28/30/32/34/36/38/40]",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={FontsSizes} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="gradient-border">
            <div className="font-wrapper border">
              <div className="f-14">{'Font-size .f-14'}</div>
            </div>
            {fontSizeData &&
              fontSizeData.map((item, index) => (
                <div className="font-wrapper border" key={index}>
                  <div className={`${item.class}`}>{item.text}</div>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontSize;
