import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi } from "../../../utils/Constant";
import DefaultBreadcrumb from "./DefaultBreadcrumb/DefaultBreadcrumb";
import DividerBread from "./DividerBread/DividerBread";
import WithIcon from "./WithIcon/WithIcon";
import Variation from "./Variation/Variation";
import ColoredBread from "./ColoredBread/ColoredBread";

const Breadcrumb = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Breadcrumb"} parent={BonusUi} title={"Breadcrumb"}/>
      <Container fluid>
        <Row>
          <DefaultBreadcrumb />
          <DividerBread />
          <WithIcon />
          <Variation />
          <ColoredBread />
        </Row>
      </Container>
    </>
  );
};

export default Breadcrumb;
