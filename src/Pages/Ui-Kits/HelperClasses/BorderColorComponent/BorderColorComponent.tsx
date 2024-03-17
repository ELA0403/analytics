import { Card, CardBody, Col } from "reactstrap";
import { borderSideColorData } from "../../../../Data/Ui-Kits/HelperClassData";
import { BorderColor } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const BorderColorComponent = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".b-*/.b-t-*/.b-b-*/.b-l-*/.b-r-*",
    },
    {
      text: "class for borders.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={BorderColor} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="gradient-border">
            <div className="d-flex align-items-center mb-2 gap-2">
              <div className="helper-box b-primary border fill-wrapper" />
              {".b-primary"}
            </div>
            {borderSideColorData &&
              borderSideColorData.map((item, index) => (
                <div className="d-flex align-items-center mb-2 gap-2" key={index} >
                  <div className={`helper-box ${item.class} border fill-wrapper`}/>
                  {item.text}
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderColorComponent;
