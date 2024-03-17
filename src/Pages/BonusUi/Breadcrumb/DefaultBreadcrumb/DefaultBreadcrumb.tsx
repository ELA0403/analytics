import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { Alert, DefaultBreadcrumbs, Home, Href, UIKits } from "../../../../utils/Constant";
import { Link } from "react-router-dom";

const DefaultBreadcrumb = () => {
  const subMenu = [
    {
      text: "You can set breadcrumb using ",
      code: ".breadcrumb ",
    },
    {
      text: " class.",
    },
  ];
  return (
    <Col sm={6}>
      <Card className="height-equal">
        <CommonHeader title={DefaultBreadcrumbs} subTitle={subMenu} headClass="pb-0" />
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to={Href}>{Home}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{UIKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to={Href}>{Home}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={Href}>{UIKits}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{Alert}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultBreadcrumb;
