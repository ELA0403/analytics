import { Link } from "react-router-dom";
import { H5, Image, P } from "../../../../AbstractElements";
import { transactionHistoryBodyData } from "../../../../Data/Dashboard/CRM/TransactionHistory";
import { dynamicImage } from "../../../../Service";
import { Href } from "../../../../utils/Constant";

const TransactionHistoryBody = () => {
  return (
    <>
      {transactionHistoryBodyData.map((data,index) => (
        <tr key={index}>
          <td>
            <div className="d-flex align-items-center">
              <Image src={dynamicImage(`dashboard/user/${data.img}.jpg`)} alt=""/>
              <div className="flex-grow-1 ms-2">
                <Link to={Href}>
                  <H5>{data.name}</H5>
                  <span>{data.pending}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <P>{data.date}</P>
          </td>
          <td>
            <H5>{data.amount}</H5>
          </td>
          <td>
            <P>{data.invoice}</P>
          </td>
          <td>
            <P className={`font-${data.color}`}>{data.status}</P>
          </td>
          <td>
            <P>{data.payment}</P>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TransactionHistoryBody;
