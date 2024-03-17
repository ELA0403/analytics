import { useState } from "react";
import { Button } from "reactstrap";
import { Cancel, Connectnewaccount, Openfirstmodal, RemoveaccountText } from "../../../../utils/Constant";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import { H6, Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import OtherModal from "./OtherModal";

const ToggleModalBody = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const toggle2 = () => {
    setOpen(!open);
  };
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
  };
  return (
    <>
      <Button color="dark" onClick={() => toggle()}>{Openfirstmodal}</Button>
      <CommonModal modalData={ModalData}>
        <div className="modal-toggle-wrapper">
          <UL className="modal-img simple-list">
            <LI>
              <Image
                src={dynamicImage("gif/whatapp.gif")}
                alt="whatsapp"
                width={100}
                height={100}
              />
            </LI>
            <LI>
              <Image
                src={dynamicImage("gif/instagram.gif")}
                alt="instagram"
                width={100}
                height={100}
              />
            </LI>
            <LI>
              <Image
                src={dynamicImage("gif/facebook.gif")}
                alt="facebook"
                width={100}
                height={100}
              />
            </LI>
          </UL>
          <H6>{RemoveaccountText}</H6>
          <Button color="dark" className="rounded-pill w-100 mt-4" onClick={() => toggle2()}>
            {Connectnewaccount}
          </Button>
          <Button color="normal" className="rounded-pill w-100 dark-toggle-btn" onClick={() =>toggle()}>
            {Cancel}
          </Button>
        </div>
      </CommonModal>
      <OtherModal modal={open} toggle={toggle2} />
    </>
  );
};

export default ToggleModalBody;
