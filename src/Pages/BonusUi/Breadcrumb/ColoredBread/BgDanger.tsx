import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Gallery, Gallery_grid, Home, Href } from "../../../../utils/Constant";

const BgDanger = () => {
  return (
    <Breadcrumb className="breadcrumb-colored m-0 bg-danger">
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>
          {Home}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>
          {Gallery}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active className="fw-bold">{Gallery_grid}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BgDanger;
