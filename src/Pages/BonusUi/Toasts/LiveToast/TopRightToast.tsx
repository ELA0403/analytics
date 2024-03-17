import { Button, Toast, ToastBody } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Toprighttoast } from "../../../../utils/Constant";
import { useState } from "react";

const TopRightToast = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    };
  return (
    <>
      <Button color="primary" id="liveToastBtn" onClick={toggle}>
        {Toprighttoast}
      </Button>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="toast-img toast-header">
            <Image className="rounded me-2" src={dynamicImage("dashboard-2/user/profile.png")} alt="profile"/>
            <strong className="me-auto">Cion Theme</strong>
            <small className="text-nowrap">5 min ago</small>
            <Button className="btn-close" color="transperent" onClick={() => setOpen(false)} ></Button>
          </div>
          <ToastBody className="toast-dark">
            Hello, I'm a web-designer.
          </ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default TopRightToast;
