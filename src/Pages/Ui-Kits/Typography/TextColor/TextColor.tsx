import { Card, CardBody, Col } from "reactstrap";
import { textColorData } from "../../../../Data/Ui-Kits/TypographyData";
import { P } from "../../../../AbstractElements";
import { TextColors } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const TextColor = () => {
  const submenuObj = [
    {
      text: "You can Give text color by using ",
      code: "text-*",
    },
    {
      text: " class",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={TextColors} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <P className='txt-primary mb-0'>
              {'This is Primary text You can archive this adding'}
              <code>{'.txt-primary'}</code> class
            </P>
            {textColorData &&
              textColorData.map((item, index) => (
                <P key={index} className={item.class}>
                  {item.text}
                  <code>{item.code}</code> class
                </P>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColor;
