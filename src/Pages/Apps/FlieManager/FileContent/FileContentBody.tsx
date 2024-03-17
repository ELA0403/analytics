import { CardBody } from "reactstrap";
import { H5, H6, LI, UL } from "../../../../AbstractElements";
import { QuickAccess } from "../../../../utils/Constant";
import { quickAccessData } from "../../../../Data/Apps/FileManager/FileManagerData";
import Folders from "./Folders";
import Files from "./Files";
import { MyFiles } from "../../../../Types/Apps/FileManager/FileManager";
interface DataType{
  myFile:MyFiles[]
}
const FileContentBody = ({myFile}:DataType) => { 
  return (
    <CardBody className="file-manager">
      
      
      <Files myFiles={myFile}/>
    </CardBody>
  );
};

export default FileContentBody;
