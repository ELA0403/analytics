import { CardHeader } from "reactstrap";
import { H3, H4 } from "../../../AbstractElements";
interface commonCardHeadingPropsType {
    bigHeadingClassName?: string;
    Heading?:string
    smallHeading?:string
    span?:string
    headingClassName?:string
    span2?:string
}

const CommonCardHeading = ({headingClassName,smallHeading,Heading,span,span2,bigHeadingClassName}: commonCardHeadingPropsType) => {
  return (
    <CardHeader className={`card-no-border pb-0 ${headingClassName ? headingClassName : ""}`}>
      {smallHeading ? (
        <H3>{smallHeading}</H3>
      ) : (
        <H4 className={bigHeadingClassName ? bigHeadingClassName : ""}>
          {Heading}
        </H4>
      )}
      {span && <span dangerouslySetInnerHTML={{ __html: span }} />}
      {span2 && <span dangerouslySetInnerHTML={{ __html: span2 }} />}
    </CardHeader>
  );
};

export default CommonCardHeading;
