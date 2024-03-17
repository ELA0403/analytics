import { Alert } from "reactstrap";
import { alertDismissibleData } from "../../../../../Data/Tables/ReactStrapTablesData/TableComponentData";
import { P } from "../../../../../AbstractElements";
import { useState } from "react";

const DismissibleAlert = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <>
      {alertDismissibleData.map((data, index) => (
        <tr key={index}>
          <td>{data.title}</td>
          <td className="w-50">
            <Alert color={data.color} toggle={onDismiss} isOpen={visible}>
              {data.icon && <i className="icofont icofont-heart-alt"></i>}
              <P dangerouslySetInnerHTML={{ __html: data.tableColData }}></P>
            </Alert>
          </td>
          <td>
            <P dangerouslySetInnerHTML={{ __html: data.details }}></P>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DismissibleAlert;
