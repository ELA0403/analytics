import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import { H4, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Alreadyleaving, Href, LogoutText, Notamember, Register, YesLogout } from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
type propsType = {
  modal: boolean;
  toggle: () => void;
};
const OtherModal = ({ modal, toggle }: propsType) => {
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
  };
  return (
    <CommonModal modalData={ModalData}>
      <div className="modal-toggle-wrapper">
        <UL className="modal-img simple-list">
          <LI>
            <Image
              src={dynamicImage("gif/logout.gif")}
              alt="logout"
              width={100}
              height={100}
            />
          </LI>
        </UL>
        <H4 className="pt-3 text-center">{Alreadyleaving}</H4>
        <P className="text-center">{LogoutText}</P>
        <span className="d-block text-center mb-4">
          {Notamember}
          <Link className="ms-1" to={Href}>
            {Register}
          </Link>
        </span>
        <Button color="dark" className="d-flex m-auto" onClick={() => toggle()}>
          {YesLogout}
        </Button>
      </div>
    </CommonModal>
  );
};

export default OtherModal;
