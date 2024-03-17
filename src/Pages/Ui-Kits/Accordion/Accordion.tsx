import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Accordions, UIKits } from "../../../utils/Constant";
import SimpleAccordion from "./SimpleAccordion/SimpleAccordion";
import FlushAccordion from "./FlushAccordion/FlushAccordion";
import MultipleCollapes from "./MultipleCollapes/MultipleCollapes";
import IconAccordion from "./IconAccordion/IconAccordion";
import OutlineAccordion from "./OutlineAccordion/OutlineAccordion";
import HorizontalAccordion from "./HorizontalAccordion/HorizontalAccordion";
import CollapesAccordion from "./CollapesAccordion/CollapesAccordion";

const Accordion = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Accordions} parent={UIKits} title={Accordions} />
      <Container fluid>
        <Row>
          <SimpleAccordion />
          <FlushAccordion />
          <MultipleCollapes />
          <IconAccordion />
          <OutlineAccordion />
          <HorizontalAccordion />
          <CollapesAccordion />
        </Row>
      </Container>
    </>
  );
};

export default Accordion;
