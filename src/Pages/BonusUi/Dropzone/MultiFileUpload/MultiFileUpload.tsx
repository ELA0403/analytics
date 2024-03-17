import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import Dropzone from "react-dropzone-uploader";
import { MultiFileUploads } from "../../../../utils/Constant";

const MultiFileUpload = () => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const handleSubmit = ( allFiles: any[]) => {
    allFiles.forEach((f: any) => f.remove());
  };
  const subTitle =[
    {
        text:"Use the ",
        code:".dropzone"
    },
    {
        text:"class through create upload files.",
        code:"[https://www.dropzone.dev/]."
    },
  ]
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={MultiFileUploads} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <Dropzone
            getUploadParams={getUploadParams}
            onSubmit={handleSubmit}
            accept="image/*"
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiFileUpload;
