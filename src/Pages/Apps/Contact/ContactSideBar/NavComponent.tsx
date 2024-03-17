import { useState } from 'react'
import { ContactNavPropsType } from '../../../../Types/Apps/Contact/ContactTypes'
import { Nav, NavItem } from 'reactstrap';
import { Href, Personal, Views } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import { sideBarData } from '../../../../Data/Apps/Contact/ContactData';
import CreateContact from './CreateContact';
import CategoryCreate from './CategoryCreate';

const NavComponent = ({ callbackActive }: ContactNavPropsType) => {
  const [activeTab, setActiveTab] = useState("1");
  const activeTabHandler=(value:string)=>{
    setActiveTab(value)
    callbackActive(value)
  }
  return (
    <Nav className="main-menu contact-options" role="tablist">
      <NavItem>
        <CreateContact />
      </NavItem>
      <NavItem>
        <span className="main-title">{Views}</span>
      </NavItem>
      <NavItem>
        <Link to={Href} className={activeTab === "1" ? "active" : ""} onClick={() => { setActiveTab("1"); callbackActive("1");}}>
          <span className="title">{Personal}</span>
        </Link>
      </NavItem>
      <NavItem>
        <CategoryCreate />
      </NavItem>
      {sideBarData.map((data, index) => (
        <NavItem key={index}>
          <Link to={Href} className={activeTab === data.value ? "active" : ""} onClick={() => activeTabHandler(data.value)}>
            <span className="title">{data.tittle}</span>
          </Link>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavComponent