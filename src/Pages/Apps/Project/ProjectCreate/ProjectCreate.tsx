import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ProjectCreates, Projects } from "../../../../utils/Constant";
import CreateNewProjectForm from "./CreateNewProjectForm";

const ProjectCreate = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Projects} title={ProjectCreates}/>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <CreateNewProjectForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectCreate;
