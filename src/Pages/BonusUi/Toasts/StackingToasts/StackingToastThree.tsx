import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { Zetatheme } from "../../../../utils/Constant";

const StackingToastThree = () => {
    const [open, setOpen] = useState(true);
  return (
    <Toast fade isOpen={open}>
      <ToastHeader>
        <FeatherIcons className="toast-icons toast-danger" iconName="Bell" />
        <strong className="me-auto">{Zetatheme}</strong>
        <small className="text-muted text-nowrap">6 min ago</small>
        <Button className="btn-close" color="transperent" onClick={() => setOpen(false)} />
      </ToastHeader>
      <ToastBody className="toast-dark">
        Hello, I'm a Software developer.
      </ToastBody>
    </Toast>
  );
};

export default StackingToastThree;
