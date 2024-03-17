import { BootstrapTabs, UIKits } from "../../../utils/Constant";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Container, Row } from "reactstrap";
import SimpleTab from "./SimpleTab/SimpleTab";
import IconTabs from "./IconTabs/IconTabs";
import VerticalTab from "./VerticalTab/VerticalTab";
import PillsTab from "./PillsTab/PillsTab";
import JustifyTab from "./JustifyTab/JustifyTab";
import LeftStyleTab from "./LeftStyleTab/LeftStyleTab";
import MaterialStyle from "./MaterialStyle/MaterialStyle";
import BorderTabs from "./BorderTabs/BorderTabs";

const Tabs = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BootstrapTabs} parent={UIKits} title={BootstrapTabs}/>
      <Container fluid={true}>
        <Row>
          <SimpleTab />
          <IconTabs />
          <VerticalTab />
          <PillsTab />
          <JustifyTab />
          <LeftStyleTab />
          <MaterialStyle />
          <BorderTabs />
        </Row>
      </Container>
    </>
  );
};

export default Tabs;
