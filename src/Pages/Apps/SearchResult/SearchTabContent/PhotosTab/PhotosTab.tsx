import { H4} from "../../../../../AbstractElements";
import { Row } from "reactstrap";
import GalleryImageDescription from "./GalleryImageDescription";
import PagesSort from "../AllTabs/PagesSort";

const PhotosTab = () => {
  return (
    <>
      <div>
        <H4 className="f-w-700 mb-2">{'About 12,120 results (0.50 seconds)'}</H4>
        <Row className="my-gallery gallery-with-description">
          <GalleryImageDescription />
        </Row>
      </div>
      <PagesSort />
    </>
  );
};

export default PhotosTab;
