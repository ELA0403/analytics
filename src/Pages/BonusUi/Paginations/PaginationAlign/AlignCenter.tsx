import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "../../../../utils/Constant";
import { alignCenterData } from "../../../../Data/BonusUi/PaginationData";

const AlignCenter = () => {
  return (
    <Nav className="m-b-30  d-flex justify-content-center">
      <Pagination className="pagination pagin-border-danger pagination-danger">
        {alignCenterData &&
          alignCenterData.map((item, index) => (
            <PaginationItem className={`${index === 2 ? "active" : ""}`} key={index}>
              <PaginationLink  href={Href}>
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}
      </Pagination>
    </Nav>
  );
};

export default AlignCenter;
