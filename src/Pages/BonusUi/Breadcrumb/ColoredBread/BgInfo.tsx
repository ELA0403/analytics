import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { BonusUi, Home, Href } from "../../../../utils/Constant";
import { Link } from "react-router-dom";

const BgInfo = () => {
  return (
    <Breadcrumb className="breadcrumb-colored m-b-30 bg-info">
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>
          {Home}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>
          {BonusUi}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active className="fw-bold">{'Breadcrumb'}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BgInfo;
