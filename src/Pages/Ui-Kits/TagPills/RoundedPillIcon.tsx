import { Badge, Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "../../../utils/CommonSvgIcon/FeatherIcons";
import { roundedPillData } from "../../../Data/Ui-Kits/TagPillsData";
import { Href, PillsWithIcons } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const RoundedPillIcon = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: ".rounded-pill",
    },
    {
      text: " utility class to make icons badges more rounded with a larger ",
      code: "border-radius",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={PillsWithIcons} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
          <Badge className="rounded-circle p-2" color='primary' to={Href} >
            <FeatherIcons iconName="DollarSign" />
          </Badge>
            {roundedPillData &&
              roundedPillData.map((item, index) => (
                <Badge className="rounded-circle p-2" color={item.class} to={Href} key={index}>
                  <FeatherIcons iconName={item.iconName} />
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoundedPillIcon;
