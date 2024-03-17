import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { H4, P } from "../../../../AbstractElements";
import { fullscreenModalData } from "../../../../Data/Ui-Kits/ModalData";
import { FullScreenModal } from "../../../../utils/Constant";

const Fullscreen = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    class: "modal-fullscreen",
    toggler: toggle,
    title: "Extra Large modal",
    size: "fullscreen",
  };
  return (
    <>
      <Button
        color="secondary"
        onClick={() => {
          toggle();
        }}
      >
        {FullScreenModal}
      </Button>
      <CommonModal modalData={ModalData}>
        <>
          {fullscreenModalData &&
            fullscreenModalData.map((item, index) => (
              <Fragment key={index}>
                <div className="large-modal-header">
                  <FeatherIcons iconName="ChevronRight" />
                  <H4>{item.title}</H4>
                </div>
                <P className="modal-padding-space">{item.text}</P>
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default Fullscreen;
