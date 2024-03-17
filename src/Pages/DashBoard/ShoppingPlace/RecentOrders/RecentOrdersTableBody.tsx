import { Button } from "reactstrap";
import { recentOrdersBody } from "../../../../Data/Dashboard/ShoppingPlace/RecentOrders";
import { H4, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";

const RecentOrdersTableBody = () => {
  return (
    <>
      {recentOrdersBody.map((data,index) => (
        <tr key={index}>
          <td>{data.id}</td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image
                  src={dynamicImage(`dashboard/user/${data.img}.png`)}
                  alt=""
                />
              </div>
              <div className="flex-grow-1 ms-2">
                <Link to={Href}>
                  <H4>{data.product}</H4>
                  <span>{data.delivery}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>{data.date}</td>
          <td>
            <Button color="transperant">{data.payment}</Button>
          </td>
          <td className={`txt-${data.color}`}>{data.status}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </>
  );
};

export default RecentOrdersTableBody;
