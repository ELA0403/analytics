import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { CionTheme } from "../../../../utils/Constant";
import { useEffect, useState } from "react";

const StackingToastOne = () => {
    const [open, setOpen] = useState(true);
    useEffect (() => {
      setTimeout(() => {
        setOpen(false);
      }, 10000);
    },[]);
  return (
    <Toast fade isOpen={open}>
      <ToastHeader >
        <FeatherIcons className="toast-icons toast-primary" iconName="Bell" />
        <strong className="me-auto">{CionTheme}</strong>
        <small className="txt-danger text-nowrap">just now</small>
        <Button className="btn-close" color="transperent" onClick={() => setOpen(false)}/>
      </ToastHeader>
      <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
    </Toast>
  );
};

export default StackingToastOne;
