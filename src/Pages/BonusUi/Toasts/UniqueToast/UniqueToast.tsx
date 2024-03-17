import { Button, Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { CionTheme, RemoveMyAccount, ToastBody1, UniqueToasts } from "../../../../utils/Constant";
import { H6, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { useEffect, useState } from "react";

const UniqueToast = () => {
  const [open, setOpen] = useState(false);
    useEffect(() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 10000);
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
        <CommonHeader headClass="pb-0" title={UniqueToasts} subTitle={subTitle}/>
        <CardBody className="toast-rtl">
          <Toast fade isOpen={open}>
            <ToastHeader className="toast-img">
              <Image className="rounded me-2" src={dynamicImage("dashboard-2/user/profile.png")} alt="profile"/>
              <strong className="me-auto">{CionTheme}</strong>
              <Button className="btn-close" color="transperent" onClick={() => setOpen(false)}/>
            </ToastHeader>
            <ToastBody className="toast-dark">
              <H6 className="mb-2"> {ToastBody1}</H6>
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
        </CardBody>
      </Card>
    </Col>
  );
};

export default UniqueToast;
