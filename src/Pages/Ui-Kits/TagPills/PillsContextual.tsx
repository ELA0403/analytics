import { Badge, Card, CardBody, Col } from "reactstrap";
import { PillsVariations, Primary } from "../../../utils/Constant";
import { pillsData } from "../../../Data/Ui-Kits/TagPillsData";
import CommonHeader from "../../../Common/CommonHeader";

const PillsContextual = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: ".rounded-pill",
    },
    {
      text: " utility class to make badges more rounded with a larger ",
      code: "border-radius",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={PillsVariations} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge pill color='primary'> {Primary}</Badge>
            {pillsData &&
              pillsData.map((item, index) => (
                <Badge pill color={`${item.class}`} key={index}>
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillsContextual;
