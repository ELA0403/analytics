import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BonusUi, Href, WithIconsBreadcrumb } from "../../../../utils/Constant";
import { Link } from "react-router-dom";

const WithIcon = () => {
  const subMenu = [
    {
      text: "You can set icons breadcrumb using ",
      code: ".breadcrumb ",
    },
    {
      text: "class.",
    },
  ];
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={WithIconsBreadcrumb} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <Breadcrumb className="p-l-0">
            <BreadcrumbItem>
              <Link to={Href}>
                <i className="fa fa-home" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-b-0 p-b-0 p-l-0">
            <BreadcrumbItem>
              <Link to={Href}>
                <i className="fa fa-home" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{BonusUi}</BreadcrumbItem>
            <BreadcrumbItem active>{'Breadcrumb'}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcon;
