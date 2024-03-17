import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, RangeSliders } from "../../../utils/Constant";
import BasicRange from "./BasicRange/BasicRange";
import NagativeValue from "./NagativeValue/NagativeValue";
import DisabledClass from "./DisabledClass/DisabledClass";
import FormateRange from "./FormateRange/FormateRange";
import FormateLabel from "./FormateLabel/FormateLabel";
import Draggable from "./Draggable/Draggable";

const RangeSlider = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RangeSliders} parent={BonusUi} title={RangeSliders}/>
      <Container fluid>
        <Row>
          <BasicRange />
          <NagativeValue />
          <DisabledClass />
          <FormateRange />
          <FormateLabel />
          <Draggable />
        </Row>
      </Container>
    </>
  );
};

export default RangeSlider;
