import { useState } from 'react';
import { NavOrgPropType } from '../../../../../Types/Apps/Contact/ContactTypes'
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { H3, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { Href } from '../../../../../utils/Constant';
import { organizationList } from '../../../../../Data/Apps/Contact/ContactData';

const NavOrg = ({ callback }: NavOrgPropType) => {
  const [organizationTab, setOrganizationTab] = useState("1");
  const handaletabs = (tab: string) => {
    setOrganizationTab(tab);
    callback(tab);
  };
  return (
    <Col xl="4" md="5" className="xl-50">
      <Nav pills className="flex-column">
        {organizationList.map((item) => (
          <NavItem id="myTab" key={item.id}>
            <NavLink href={Href} className={organizationTab === item.activeTab ? "active" : ""} onClick={() => handaletabs(item.activeTab)}>
                <div className="d-flex">
                    <Image className="p-0 img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage(`${item.img}`)} alt="Image" />
                    <div className="flex-grow-1">
                        <H3>{item.name}</H3>
                        <P>{item.email}</P>
                    </div>
                </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  )
}

export default NavOrg