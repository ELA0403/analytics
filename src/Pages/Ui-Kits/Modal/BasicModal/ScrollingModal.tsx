import { Fragment, useState } from "react";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import { Button } from "reactstrap";
import { Scrollingcontent, UXDesigner, WedDesigner } from "../../../../utils/Constant";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { scrollingModalData } from "../../../../Data/Ui-Kits/ModalData";
import { H6, P } from "../../../../AbstractElements";

const ScrollingModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    footer: true,
    toggler: toggle,
    title: "Scrolling Modal",
  };
  return (
    <>
      <Button color="success" onClick={() => {toggle()}}>
        {Scrollingcontent}
      </Button>
      <CommonModal modalData={ModalData}>
        <>
          <H6>{WedDesigner}</H6>
          {scrollingModalData &&
            scrollingModalData.map((item, index) => (
              <Fragment key={index}>
                {index === 3 && <H6>{UXDesigner}</H6>}
                <div className={`d-flex ${item.class}`}>
                  <div className="flex-shrink-0">
                    <FeatherIcons
                      iconName="ArrowRightCircle"
                      className="svg-modal"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    {index === 3 ? (
                      <P className="pb-4">{item.text}</P>
                    ) : (
                      <P>{item.text}</P>
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

export default ScrollingModal;
