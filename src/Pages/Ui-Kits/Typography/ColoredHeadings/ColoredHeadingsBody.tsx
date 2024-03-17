import { Table } from "reactstrap";
import { Code, Heading, Heading1, SubHeading} from "../../../../utils/Constant";
import { H1, H2, H3, H4, H5 } from "../../../../AbstractElements";

const ColoredHeadingsBody = () => {
  return (
    <div className="table-responsive theme-scrollbar">
      <Table className="mb-0 typography-table">
        <thead>
          <tr>
            <th className="pt-0">{Code}</th>
            <th className="pt-0">{Heading}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>{'<h1></h1>'}</code>
            </td>
            <td>
              <H1>
                <span className="txt-primary"> {Heading1}</span> {SubHeading}
              </H1>
            </td>
          </tr>
          <tr>
            <td>
              <code>{'<h2></h2>'}</code>
            </td>
            <td>
              <H2>
                <span className="txt-secondary"> {Heading1}</span> {SubHeading}
              </H2>
            </td>
          </tr>
          <tr>
            <td>
              <code>{'<h3></h3>'}</code>
            </td>
            <td>
              <H3>
                <span className="txt-success">{Heading1}</span> {SubHeading}
              </H3>
            </td>
          </tr>
          <tr>
            <td>
              <code>{'<h4></h4>'}</code>
            </td>
            <td>
              <H4>
                <span className="txt-info">{Heading1}</span> {SubHeading}
              </H4>
            </td>
          </tr>
          <tr>
            <td>
              <code>{'<h5></h5>'}</code>
            </td>
            <td>
              <H5>
                <span className="txt-warning">{Heading1}</span> {SubHeading}
              </H5>
            </td>
          </tr>
          <tr>
            <td className="pb-0">
              <code>{'<h6></h6>'}</code>
            </td>
            <td className="pb-0">
              <H5>
                <span className="txt-danger"> {Heading1}</span> {SubHeading}
              </H5>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ColoredHeadingsBody;
