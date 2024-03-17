import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Popovers, UIKits } from "../../../utils/Constant";
import Basic from "./Basic/Basic";
import Directions from "./PopoverDirection/PopoverDirection";
import Offset from "./Offset/Offset";

const Popover = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Popovers} parent={UIKits} title={Popovers} />
      <Container fluid>
        <Row className="popover-main">
          <Basic />
          <Directions />
          <Offset />
        </Row>
      </Container>
    </>
  );
};

export default Popover;
