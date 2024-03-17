import { H3, P } from "../../../../AbstractElements";
import { CardHeader } from "reactstrap";
import { Displayheading, Displayheadings } from "../../../../utils/Constant";

const CardHeaderDisplay = () => {
  return (
    <CardHeader>
      <H3 className="mb-0">{Displayheading}</H3>
      <P className="f-m-light mt-1">
        {" Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a"}
        <mark>{Displayheadings}</mark>
        {"—a larger, slightly more opinionated heading style."}
      </P>
    </CardHeader>
  );
};

export default CardHeaderDisplay;
