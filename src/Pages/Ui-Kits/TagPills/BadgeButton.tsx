import { Badge, Button, Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "../../../utils/CommonSvgIcon/FeatherIcons";
import { badgeButtonData } from "../../../Data/Ui-Kits/TagPillsData";
import { BadgesPartButtons, Message } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const BadgeButton = () => {
  const submenuObj = [
    {
      text: "",
      code: ".badge",
    },
    {
      text: " can be used as part of ",
      code: ".btn",
    },
    {
      text: " to provide a icons.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgesPartButtons} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing flex-column align-items-start">
            <Button color="primary" className="d-flex align-items-center">
              {Message}
              <Badge color="light" className="rounded-circle btn-p-space text-dark ms-2">
                <FeatherIcons iconName="Mail" />
              </Badge>
            </Button>
            {badgeButtonData &&
              badgeButtonData.map((item, index) => (
                <Button color={item.class} className="d-flex align-items-center" key={index} >
                  {item.text}
                  <Badge color="light" className="rounded-circle btn-p-space text-dark ms-2" >
                    <FeatherIcons iconName={item.iconName} />
                  </Badge>
                </Button>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeButton;
