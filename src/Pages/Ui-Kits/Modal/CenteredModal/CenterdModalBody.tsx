import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import { H4, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { CenteredError, Close } from "../../../../utils/Constant";
import { Button } from "reactstrap";
type propsType = {
  modal: boolean;
  toggle: () => void;
};
const CenterdModalBody = ({ modal, toggle }: propsType) => {
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
    title: "Centered Modal",
  };
  return (
    <CommonModal modalData={ModalData}>
      <div className="modal-toggle-wrapper">
        <UL className="modal-img simple-list justify-content-center">
          <LI>
            <Image
              src={dynamicImage("gif/danger.gif")}
              alt="error"
              width={100}
              height={100}
            />
          </LI>
        </UL>
        <H4 className="text-center pb-2">{CenteredError}</H4>
        <P className="text-center">{"Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}</P>
        <Button
          color="secondary"
          className="d-flex m-auto"
          onClick={toggle}
        >
          {Close}
        </Button>
      </div>
    </CommonModal>
  );
};

export default CenterdModalBody;
