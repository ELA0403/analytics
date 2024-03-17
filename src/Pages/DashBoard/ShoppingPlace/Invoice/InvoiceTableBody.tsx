import { invoiceBody } from "../../../../Data/Dashboard/ShoppingPlace/InvoiceTable";
import { H5, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";
import { Button } from "reactstrap";

const InvoiceTableBody = () => {
  return (
    <>
      {invoiceBody.map((data,index) => (
        <tr key={index}>
          <td>
            <div className="d-flex align-items-center">
              <Image
                src={dynamicImage(`dashboard/user/${data.img}.jpg`)}
                alt=""
              />
              <div className="flex-grow-1 ms-2">
                <Link to={Href}>
                  <H5>{data.client}</H5>
                  <span>{data.id}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <P>{data.date}</P>
          </td>
          <td>
            <H5>{data.due}</H5>
          </td>
          <td>
            <P>{data.amount}</P>
          </td>
          <td>
            <P>{data.sent}</P>
          </td>
          <td>
            <Button color="transperant">{data.status}</Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default InvoiceTableBody;
