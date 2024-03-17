import { Badge, Card, CardBody, Col } from "reactstrap";
import { BadgeIcons, Href } from "../../../utils/Constant";
import FeatherIcons from "../../../utils/CommonSvgIcon/FeatherIcons";
import { badgeIconData } from "../../../Data/Ui-Kits/TagPillsData";
import CommonHeader from "../../../Common/CommonHeader";

const BadgeWithIcon = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: ".badge ",
    },
    {
      text: "utility class to make more icons.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgeIcons} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge className='b-ln-height' to={Href} color="primary" >
              <FeatherIcons iconName='DollarSign' />
            </Badge>
            {badgeIconData &&
              badgeIconData.map((item, index) => (
                <Badge className={item.class} color={item.color}  to={Href} key={index}>
                  <FeatherIcons iconName={item.iconName} />
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeWithIcon;
