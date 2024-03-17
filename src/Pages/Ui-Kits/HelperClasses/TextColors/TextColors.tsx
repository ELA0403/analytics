import { Card, CardBody, Col } from "reactstrap";
import { textColorsData } from "../../../../Data/Ui-Kits/HelperClassData";
import { TextColor } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const TextColors = () => {
  const submenuObj = [
    {
      text: "Use the text color for ",
      code: ".font-*",
    },
    {
      text: " class.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={TextColor} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div>
            <div className="d-flex align-items-center mb-2 gap-2"></div>
            <div className='font-primary'>{'This is a font-primary text used class as .font-primary'}</div>
          </div>
          {textColorsData &&
            textColorsData.map((item, index) => (
              <div key={index}>
                <div
                  className="d-flex align-items-center mb-2 gap-2"
                  key={index}
                ></div>
                <div className={`${item.class}`}>{item.text}</div>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColors;
