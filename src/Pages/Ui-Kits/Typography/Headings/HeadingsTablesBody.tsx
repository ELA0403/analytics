import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "../../../../utils/Constant";
import { H1, H2, H3, H4, H5, H6 } from "../../../../AbstractElements";

const HeadingsTablesBody = () => {
  return (
    <>
      <tr>
        <td>
          <code>{'<h1></h1>'}</code>
        </td>
        <td>
          <H1 className="mb-0">1.875</H1>
        </td>
        <td>
          <H1>
            <span>{Heading1}</span>
          </H1>
        </td>
      </tr>
      <tr>
        <td>
          <code>{'<h2></h2>'}</code>
        </td>
        <td>
          <H2 className="mb-0">1.625</H2>
        </td>
        <td>
          <H2>
            <span> {Heading2}</span>
          </H2>
        </td>
      </tr>
      <tr>
        <td>
          <code>{'<h3></h3>'}</code>
        </td>
        <td>
          <H3 className="mb-0">1.25</H3>
        </td>
        <td>
          <H3>
            <span>{Heading3}</span>
          </H3>
        </td>
      </tr>
      <tr>
        <td>
          <code>{'<h4></h4>'}</code>
        </td>
        <td>
          <H4 className="mb-0">0.875</H4>
        </td>
        <td>
          <H4>
            <span> {Heading4}</span>
          </H4>
        </td>
      </tr>
      <tr>
        <td>
          <code>{'<h5></h5>'}</code>
        </td>
        <td>
          <H5 className="mb-0">0.813</H5>
        </td>
        <td>
          <H5>
            <span> {Heading5}</span>
          </H5>
        </td>
      </tr>
      <tr>
        <td className="pb-0">
          <code>{'<h6></h6>'}</code>
        </td>
        <td className="pb-0">
          <H6 className="mb-0">0.75</H6>
        </td>
        <td className="pb-0">
          <H6>
            <span>{Heading6} </span>
          </H6>
        </td>
      </tr>
    </>
  );
};

export default HeadingsTablesBody;
