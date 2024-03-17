import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import { Fullscreenbelow_lg, UXDesigner, WebDesign, WedDesigner } from "../../../../utils/Constant";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { H6, P } from "../../../../AbstractElements";
import { belowsmData } from "../../../../Data/Ui-Kits/ModalData";

const BelowLg = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    footer: true,
    toggler: toggle,
    title: "Full Screen Below lg",
  };
  return (
    <>
      <Button
        color="outline-danger-2x"
        className="btn-outline-warning-2x"
        onClick={() => {
          toggle();
        }}
      >
        {Fullscreenbelow_lg}
      </Button>
      <CommonModal modalData={ModalData}>
        <div className="large-modal-header">
          <FeatherIcons iconName="ChevronsRight" />
          <H6>{WebDesign}</H6>
        </div>
        <P className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</P>
        <H6>{WedDesigner}</H6>
        <>
          {belowsmData &&
            belowsmData.map((item, index) => (
              <Fragment key={index}>
                <div className={`d-flex ${item.class}`}>
                  <div className="flex-shrink-0">
                    <FeatherIcons
                      iconName="ArrowRightCircle"
                      className="svg-modal"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <P className={index === 1 ? "pb-4 mb-0" : "mb-0"}>
                      {item.text}
                    </P>
                  </div>
                </div>
                {index === 1 && <H6>{UXDesigner}</H6>}
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default BelowLg;
