import { Nav, NavLink } from "reactstrap";
import { Home, Inbox, Profile, Settings } from "../../../../utils/Constant";

type propsType = {
    basicTab: string;
    setBasicTab: (data: string) => void;
}
const MaterialTab = ({ basicTab, setBasicTab }: propsType) => {
  return (
    <div className="d-flex">
      <Nav className="flex-column nav-secondary border-tab nav-left border-0">
        <NavLink
          className={`nav-effect ${basicTab === "1" ? "active" : ""}`}
          onClick={() => setBasicTab("1")}
        >
          {Home}
        </NavLink>
        <NavLink
          className={`nav-effect ${basicTab === "2" ? "active" : ""}`}
          onClick={() => setBasicTab("2")}
        >
          {Profile}
        </NavLink>
        <NavLink
          className={`nav-effect ${basicTab === "3" ? "active" : ""}`}
          onClick={() => setBasicTab("3")}
        >
          {Inbox}
        </NavLink>
        <NavLink
          className={`nav-effect pb-0 ${basicTab === "4" ? "active" : ""}`}
          onClick={() => setBasicTab("4")}
        >
          {Settings}
        </NavLink>
      </Nav>
    </div>
  );
};

export default MaterialTab;
