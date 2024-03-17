import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { Fullscreenmodal, UXDesigner, WebDesign, WedDesigner } from "../../../../utils/Constant";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { H6, P } from "../../../../AbstractElements";
import { scrollingModalData } from "../../../../Data/Ui-Kits/ModalData";

const FullscreenOutline = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    footer: true,
    class: "modal-fullscreen",
    toggler: toggle,
    title: "Full Screen Modal",
    button: "Save",
  };
  return (
    <>
      <Button
        color="outline-secondary-2x"
        onClick={() => {
          toggle();
        }}
      >
        {Fullscreenmodal}
      </Button>
      <CommonModal modalData={ModalData}>
        <div className="large-modal-header">
          <FeatherIcons iconName="ChevronsRight" />
          <H6>{WebDesign} </H6>
        </div>
        <P className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</P>
        <>
          <H6>{WedDesigner}</H6>
          {scrollingModalData &&
            scrollingModalData.map((item, index) => (
              <Fragment key={index}>
                {index === 4 && <H6>{UXDesigner}</H6>}
                <div className={`d-flex ${item.class}`}>
                  <div className="flex-shrink-0">
                    <FeatherIcons
                      iconName="ArrowRightCircle"
                      className="svg-modal"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    {index === 3 ? (
                      <P className="pb-4 mb-0">{item.text}</P>
                    ) : (
                      <P className="mb-0">{item.text}</P>
                    )}
                  </div>
                </div>
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default FullscreenOutline;
