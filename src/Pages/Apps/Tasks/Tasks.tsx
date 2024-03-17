import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, TasksHeading } from "../../../utils/Constant";
import NavClass from "./NavClass/NavClass";
import TabClass from "./TabClass/TabClass";
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";
import { setActiveTab } from "../../../ReaduxToolkit/Reducer/TasksSlice";

const Tasks = () => {
  const dispatch = useAppDispatch()
  const activeToggle = (tab: string) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <>
      <Breadcrumbs mainTitle={TasksHeading} title={TasksHeading} parent={Apps}/>
      <Container fluid>
        <div className="email-wrap bookmark-wrap tasks-items">
          <Row>
            <NavClass activeToggle={activeToggle} />
            <TabClass />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Tasks;
