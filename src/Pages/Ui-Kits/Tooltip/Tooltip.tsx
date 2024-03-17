import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Tooltips, UIKits } from "../../../utils/Constant";
import BasicTooltip from "./BasicTooltip/BasicTooltip";
import ColoredTooltip from "./ColoredTooltip/ColoredTooltip";
import TooltipDirection from "./TooltipDirection/TooltipDirection";
import HtmlTooltip from "./HtmlTooltip/HtmlTooltip";
import Filledtooltip from "./Filledtooltip/Filledtooltip";

const Tooltip = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Tooltips} parent={UIKits} title={Tooltips} />
      <Container fluid>
        <Row>
          <BasicTooltip />
          <ColoredTooltip />
          <TooltipDirection />
          <HtmlTooltip />
          <Filledtooltip />
        </Row>
      </Container>
    </>
  );
};

export default Tooltip;
