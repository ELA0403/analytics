import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Typographys, UiKits } from "../../../utils/Constant";
import Headings from "./Headings/Headings";
import ColoredHeadings from "./ColoredHeadings/ColoredHeadings";
import FontWeight from "./FontWeight/FontWeight";
import ListingTypography from "./ListingTypography/ListingTypography";
import DisplayHeadings from "./DisplayHeadings/DisplayHeadings";
import InlineTextElements from "./InlineTextElements/InlineTextElements";
import TextColor from "./TextColor/TextColor";
import Blockquote from "./Blockquotes/Blockquotes";

const Typography = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={Typographys}
        parent={UiKits}
        title={Typographys}
      />
      <Container fluid>
        <Row>
          <Headings />
          <ColoredHeadings />
          <FontWeight />
          <ListingTypography />
          <DisplayHeadings />
          <InlineTextElements />
          <TextColor />
          <Blockquote />
        </Row>
      </Container>
    </>
  );
};

export default Typography;
