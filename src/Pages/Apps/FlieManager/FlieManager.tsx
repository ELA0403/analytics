import { Card, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, FileManagerHeading } from "../../../utils/Constant";
import FileSideBar from "./FileSideBar/FileSideBar";
import FileContent from "./FileContent/FileContent";

const FileManager = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FileManagerHeading} parent={Apps} title={FileManagerHeading}/>
      <Container fluid>
        <Row>
          
          <div  className="box-col-12">
            <div className="file-content">
              <Card>
                <FileContent />
              </Card>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default FileManager;
