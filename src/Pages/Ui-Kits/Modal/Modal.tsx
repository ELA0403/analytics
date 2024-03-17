import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Modals, UIKits } from "../../../utils/Constant";
import BasicModal from "./BasicModal/BasicModal";
import SizeModal from "./SizeModal/SizeModal";
import FullscreenModal from "./FullscreenModal/FullscreenModal";
import CenteredModal from "./CenteredModal/CenteredModal";
import ToggleModal from "./ToggleModal/ToggleModal";
import StaticModal from "./StaticModal/StaticModal";
import CustomModals from "./CustomModals/CustomModals";

const Modal = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Modals} parent={UIKits} title={Modals} />
      <Container fluid={true}>
        <Row>
          <BasicModal />
          <SizeModal />
          <FullscreenModal />
          <CenteredModal />
          <ToggleModal />
          <StaticModal />
          <CustomModals />
        </Row>
      </Container>
    </>
  );
};

export default Modal;
