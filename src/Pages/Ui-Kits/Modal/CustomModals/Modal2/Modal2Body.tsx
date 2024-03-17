import { CionLogin } from "../../../../../utils/Constant";
import { H3, P } from "../../../../../AbstractElements";
import StaticModalForm from "../../StaticModal/StaticModalForm";
type propsType = {
    toggle: () => void;
}

const Modal2Body = ({ toggle }: propsType) => {
  return (
    <div className="modal-toggle-wrapper">
      <H3>{CionLogin}</H3>
      <P>{"Fill in your information below to continue."}</P>
      <StaticModalForm toggle={toggle} />
    </div>
  );
};

export default Modal2Body;
