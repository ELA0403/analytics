import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { DefaultFileUpload } from "../../../../utils/Constant";
import { FilePond } from "react-filepond";

const DefaultDropzone = () => {
  const [files, setFiles] = useState([]);
  const subTitle =[
    {
        text:"We use the create method to turn a",
        code:"<input type='file'>"
    },
    {
        text:"into a FilePond drop area.",
        code:"[https://pqina.nl/filepond/]"
    },
  ]
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={DefaultFileUpload} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <FilePond
            files={files}
            onupdatefiles={() => setFiles}
            allowMultiple={true}
            maxFiles={1}
            labelIdle={
              'Drag & Drop your files or <span className="filepond--label-action text-danger text-decoration-none">Browse</span>'
            }
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultDropzone;
