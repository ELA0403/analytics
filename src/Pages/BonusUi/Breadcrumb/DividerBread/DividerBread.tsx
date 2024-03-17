import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { DividerBreadcrumb, Home, Href, Progress, UIKits } from "../../../../utils/Constant";

const DividerBread = () => {
  const subMenu = [
    {
      text: "You can set breadcrumb using ",
      code: ".breadcrumb-icon",
    },
    {
      text: " class.",
    },
  ];
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={DividerBreadcrumb} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <Breadcrumb className="breadcrumb-icon">
            <BreadcrumbItem href={Href}>
              {Home}
            </BreadcrumbItem>
            <BreadcrumbItem active>{UIKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="breadcrumb-icon m-0">
            <BreadcrumbItem href={Href}>
              {Home}
            </BreadcrumbItem>
            <BreadcrumbItem href={Href}>
              {UIKits}
            </BreadcrumbItem>
            <BreadcrumbItem active>{Progress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerBread;
