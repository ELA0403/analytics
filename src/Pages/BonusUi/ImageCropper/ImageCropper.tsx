import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, ImageCroppers } from "../../../utils/Constant";
import ImageCropperDemo from "./ImageCropperDemo";

const ImageCropper = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageCroppers} parent={BonusUi} title={ImageCroppers}/>
      <Container fluid>
        <ImageCropperDemo />
      </Container>
    </>
  );
};

export default ImageCropper;
