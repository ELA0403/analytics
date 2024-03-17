import { Badge, Card, CardBody, Col } from "reactstrap";
import { badgesData } from "../../../Data/Ui-Kits/TagPillsData";
import { BadgesContextual, Primary } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const Badges = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: ".badge ",
    },
    {
      text: "utility class to make more badges.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgesContextual} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge color='primary'>{Primary}</Badge>
            {badgesData &&
              badgesData.map((item, index) => (
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

export default Badges;
