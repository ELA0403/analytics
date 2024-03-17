import { Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { activeClassData } from "../../../../Data/BonusUi/PaginationData";
import { Href } from "../../../../utils/Constant";

const ActiveList = () => {
  return (
    <Nav>
      <Pagination className="pagination-success pagin-border-success">
        {activeClassData &&
          activeClassData.map((item, index) => (
            <PaginationItem
              className={`${
                item.id === "Pagination3" ? "active" : ""
              }`}
              key={index}
            >
              <PaginationLink
                href={Href}
                className={`${
                  item.id === "Pagination1" ? "disabled" : ""
                } `}
              >
                {item.text}
                {item.text === "2" ? <span className="sr-only">(current)</span> : ""}
              </PaginationLink>
            </PaginationItem>
          ))}
      </Pagination>
    </Nav>
  );
};

export default ActiveList;
