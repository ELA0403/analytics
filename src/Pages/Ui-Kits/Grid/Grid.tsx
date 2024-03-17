import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Grids, UIKits } from "../../../utils/Constant";
import GridOptions from "./GridOptions/GridOptions";
import GridColumn from "./GridColumn/GridColumn";
import VerticalAlignment from "./VerticalAlignment/VerticalAlignment";
import HorizontalAlignment from "./HorizontalAlignment/HorizontalAlignment";
import Nesting from "./Nesting/Nesting";
import Order from "./Order/Order";
import Offset from "./Offset/Offset";

const Grid = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Grids} parent={UIKits} title={Grids} />
      <Container fluid={true}>
        <Row>
          <GridOptions />
          <GridColumn />
          <VerticalAlignment />
          <HorizontalAlignment />
          <Nesting />
          <Order />
          <Offset />
        </Row>
      </Container>
    </>
  );
};

export default Grid;
