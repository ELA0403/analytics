import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Avatar, Typographys, UiKits } from "../../../utils/Constant";
import AvatarSize from "./AvatarSize";
import AvatarStatus from "./AvatarStatus";
import AvatarShapes from "./AvatarShapes";
import AvatarRatio from "./AvatarRatio";
import AvatarGroup from "./AvatarGroup";

const Avatars = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Avatar} parent={UiKits} title={Typographys} />
      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            <AvatarSize />
            <AvatarStatus />
            <AvatarShapes />
            <AvatarRatio />
            <AvatarGroup />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Avatars;
