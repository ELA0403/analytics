import { useState } from "react";
import { Button } from "reactstrap";
import { ExploreMore, Simple, SimpleText, Upto } from "../../../../utils/Constant";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import { H4, Image, P } from "../../../../AbstractElements";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { dynamicImage } from "../../../../Service";

const SimpleModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    toggler: toggle,
    title: "Simple Modal",
  };
  return (
    <>
      <Button
        color="secondary"
        onClick={() => {
          toggle();
        }}
      >
        {Simple}
      </Button>
      <CommonModal modalData={ModalData}>
        <div className="modal-toggle-wrapper">
          <H4>
            {Upto}
            <strong className="txt-danger">85% OFF</strong>
            {SimpleText}
          </H4>
          <div className="modal-img">
            <Image
              src={dynamicImage("gif/online-shopping.gif")}
              alt="online-shopping"
              width={100}
              height={100}
            />
          </div>
          <P className="text-sm-center">{"Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit."}</P>
          <Button
            color="primary"
            className="d-flex align-items-center gap-2 text-light ms-auto"
            onClick={() => toggle()}
          >
            {ExploreMore}
            <FeatherIcons iconName="ArrowRight" />
          </Button>
        </div>
      </CommonModal>
    </>
  );
};

export default SimpleModal;
