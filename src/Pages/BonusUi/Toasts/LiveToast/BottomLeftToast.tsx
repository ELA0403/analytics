import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Bottomlefttoast, CionTheme, RemoveMyAccount } from "../../../../utils/Constant";
import { H6, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const BottomLeftToast = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    };
  return (
    <>
      <Button color="success" id="liveToastBtn3" onClick={toggle}>
        {Bottomlefttoast}
      </Button>
      <div className="toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage("dashboard-2/user/profile.png")} alt="profile" />
            <strong className="me-auto">{CionTheme}</strong>
            <Button className="btn-close" color="transperent" onClick={() => setOpen(false)}/>
          </ToastHeader>
          <ToastBody className="toast-dark">
            <H6 className="mb-2">Your account will be permanently deleted?</H6>
            <P className="mb-0">Do you intend to continue?</P>
            <div className="mt-2 pt-2 border-top d-flex gap-2">
              <Button color="dark" size="sm">
                I'm not sure
              </Button>
              <Button color="danger" size="sm" onClick={() => setOpen(false)}>
                {RemoveMyAccount}
              </Button>
            </div>
          </ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default BottomLeftToast;
