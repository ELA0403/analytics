import { useState } from "react";
import { SearchTabsPropsType } from "../../../Types/Apps/SearchResult/SearchResultTypes";
import { Nav, NavItem, NavLink } from "reactstrap";
import { navData } from "../../../Data/Apps/SearchResult/SearchResultData";

const SearchTabs = ({
  callbackActive,
  activeTabValue,
}: SearchTabsPropsType) => {
  const [activeTab, setActiveTab] = useState(activeTabValue);
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      setActiveTab(id);
      callbackActive(id);
    }
  };
  return (
    <div className="text-center">
      <Nav tabs className="search-list">
        {navData.map((data, index) => (
          <NavItem key={index}>
            <NavLink
              className={activeTab === index + 1 ? "active" : ""}
              onClick={() => handleTab(data.id)}
            >
              <i className={`icon-${data.icon}`} />
              {data.tittle}
            </NavLink>
            <div className="material-border"></div>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default SearchTabs;
