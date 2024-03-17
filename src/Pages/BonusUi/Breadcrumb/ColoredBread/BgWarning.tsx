import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Flag_icon, Home, Href, Icons } from "../../../../utils/Constant";
import { Link } from "react-router-dom";

const BgWarning = () => {
  return (
    <Breadcrumb className="breadcrumb-colored m-b-30 bg-warning">
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>
          {Home}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>
          {Icons}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active className=" fw-bold">{Flag_icon}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BgWarning;
