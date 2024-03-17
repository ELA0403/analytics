import { PlusCircle } from "react-feather";
import { Col } from "reactstrap";
import { CreateNewProjects } from "../../../../utils/Constant";
import { Link } from "react-router-dom";

const CreateNewProject = () => {
  return (
    <Col md={6}>
      <div className="text-end">
        <Link
          className="btn btn-primary"
          style={{ color: "white" }}
          to={`${process.env.PUBLIC_URL}/apps/project/createnew`}
        >
          <PlusCircle />
          {CreateNewProjects}
        </Link>
      </div>
    </Col>
  );
};

export default CreateNewProject;
