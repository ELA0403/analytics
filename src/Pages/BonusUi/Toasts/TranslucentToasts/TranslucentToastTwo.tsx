import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { Kohotheme } from "../../../../utils/Constant";

const TranslucentToastTwo = () => {
  const [open, setOpen] = useState(true);
  return (
    <Toast fade isOpen={open}>
      <ToastHeader>
        <FeatherIcons className="toast-icons toast-dark" iconName="Disc" />
        <strong className="me-auto">{Kohotheme}</strong>
        <small className="text-muted text-nowrap">1 sec ago</small>
        <Button className="btn-close" color="transperent" onClick={() => setOpen(false)}/>
      </ToastHeader>
      <ToastBody className="toast-dark"> Hello, I'm a full-stack developer.</ToastBody>
    </Toast>
  );
};

export default TranslucentToastTwo;
