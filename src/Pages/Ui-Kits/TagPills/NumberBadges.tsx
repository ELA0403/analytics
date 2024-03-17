import { Badge, Card, CardBody, Col } from "reactstrap";
import { numberBadgesData } from "../../../Data/Ui-Kits/TagPillsData";
import { NumberofBadge } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const NumberBadges = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: ".badge",
    },
    {
      text: " utility class to make number of more badges.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={NumberofBadge} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge color='primary' >1</Badge>
            {numberBadgesData &&
              numberBadgesData.map((item, index) => (
                <Badge color={`${item.class}`} key={index}>
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NumberBadges;
