import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import Dropzone from "react-dropzone-uploader";
import { SingleFileUploads } from "../../../../utils/Constant";

const SingleFileUpload = () => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
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
        <CommonHeader title={SingleFileUploads} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Dropzone
            getUploadParams={getUploadParams}
            maxFiles={1}
            inputContent="Drop files here or click to upload."
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
