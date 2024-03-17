import { useEffect, useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { Voxotheme } from "../../../../utils/Constant";

const StackingToastFour = () => {
    const [open, setOpen] = useState(true);
    useEffect (() => {
      setTimeout(() => {
        setOpen(false);
      }, 10000);
    },[]);
  return (
    <Toast fade isOpen={open}>
      <ToastHeader >
        <FeatherIcons className="toast-icons toast-success" iconName="Bell" />
        <strong className="me-auto">{Voxotheme}</strong>
        <small className="txt-danger text-nowrap">3 sec ago</small>
        <Button className="btn-close" color="transperent" onClick={() => setOpen(false)}/>
      </ToastHeader>
      <ToastBody className="toast-dark">Hello, I'm a professional web-designer.</ToastBody>
    </Toast>
  );
};

export default StackingToastFour;
