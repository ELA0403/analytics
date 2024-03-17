import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { CionTheme } from "../../../../utils/Constant";

const ToastPlacementsBody = (props: { data: string }) => {
    const {data} = props
  return (
    <div className="bg-light position-relative bd-example-toasts" >
      <div className={`toast-container p-3 position-absolute ${data}`} id="toastPlacement">
        <Toast>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage("dashboard-2/user/profile.png")} alt="profile"/>
            <strong className="me-auto">{CionTheme}</strong>
            <small className="text-nowrap">25 min ago</small>
          </ToastHeader>
          <ToastBody className="toast-dark txt-dark">
            <P className="toast-content"><em className="txt-danger">Attackers</em> on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.</P>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ToastPlacementsBody;
