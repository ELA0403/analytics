import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { iconListData } from "../../../../Data/BonusUi/PaginationData";
import { Href } from "../../../../utils/Constant";

const RoundedList = () => {
  return (
      <Pagination className="pagination-dark pagin-border-dark gap-2">
        <PaginationItem>
          <PaginationLink first href={Href} className="rounded-circle" />
        </PaginationItem>
        {iconListData &&
          iconListData.map((item, index) => (
            <PaginationItem key={index}>
              <PaginationLink className="rounded-circle" href="#">
                {item.text}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationLink href={Href} last className="rounded-circle"/>
        </PaginationItem>
      </Pagination>
  );
};

export default RoundedList;
