import { Button, Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { CionTheme, DefaultToasts } from "../../../../utils/Constant";
import { useEffect, useState } from "react";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const DefaultToast = () => {
  const [open, setOpen] = useState(false);
    useEffect (() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 20000);
    },[]);
    const subTitle = [
        {
            text:"Use the",
            code:".hide"
        },
        {
            text:"class through hide toast and ",
            code:".show"
        },
        {
            text:"class through visible toast. "
        }
    ]
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonHeader headClass="pb-0" title={DefaultToasts} subTitle={subTitle} />
        <CardBody className="toast-rtl">
          <Toast fade isOpen={open}>
            <ToastHeader className="toast-img">
              <Image className="rounded me-2" src={dynamicImage("dashboard-2/user/profile.png")} alt="profile"/>
              <strong className="me-auto">{CionTheme}</strong>
              <small className="text-nowrap">10 min ago</small>
              <Button className="btn-close" color="transperent" onClick={() => setOpen(false)}/>
            </ToastHeader>
            <ToastBody className="toast-dark">
              <strong className="txt-success">Well done!</strong> You
              successfully read this important message.
            </ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultToast;
