import { Badge, Button, Card, CardBody, Nav, NavItem } from 'reactstrap'
import { Href, ToDoList, ToDofilter } from '../../../../utils/Constant'
import { useState } from 'react';
import UserDetail from './UserDetail';
import { sideBartList } from '../../../../Data/Apps/Todo/TodoData';
import { CheckCircle } from 'react-feather';
import { Link } from 'react-router-dom';

const TodoSideBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="email-sidebar md-sidebar">
      <Button color='primary' className="email-aside-toggle md-sidebar-toggle" onClick={()=>setShowSideBar(!showSideBar)}>{ToDofilter}</Button>
      <div className={`email-left-aside md-sidebar-aside ${showSideBar ?"open":""}`}>
        <div className="email-sidebar md-sidebar">
          <div className={`email-left-aside md-sidebar-aside ${showSideBar ? "open" : ""}`}>
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark custom-scrollbar">
                  <UserDetail />
                  <Nav className="main-menu">
                    <NavItem>
                        <Button color="primary" className="badge-light d-block btn-mail w-100">
                            <CheckCircle className="me-2" /> {ToDoList}
                        </Button>
                    </NavItem>
                    {sideBartList.map((data, index) =>
                        <NavItem key={index}>
                          <Link to={Href}>
                            <span className={`iconbg badge-light-${data.color}`}>{data.icon}</span>
                            <span className="title ms-2">{data.tittle}</span>
                            {data.badge && (
                              <Badge pill color={data.tittle === "In Process"? "primary": data.color}>{data.badge}</Badge>
                            )}
                          </Link>
                        </NavItem>
                      )}
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSideBar