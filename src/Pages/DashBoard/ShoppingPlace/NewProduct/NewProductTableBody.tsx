import { tableBody } from "../../../../Data/Dashboard/ShoppingPlace/NewProductTable";
import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";

const NewProductTableBody = () => {
  return (
    <>
      {tableBody.map((data,index) => (
        <tr key={index}>
          <td>
            <div className="d-flex">
              <Image src={dynamicImage(`dashboard/${data.img}.jpg`)} alt="" />
              <div className="flex-grow-1 ms-2">
                <Link to={Href}>
                  <span>{data.name}</span>
                  <H5>{data.number}</H5>
                </Link>
              </div>
              <div className="active-status active-online"></div>
            </div>
          </td>
          <td>
            <span>{data.coupon}</span>
            <H5>{data.code}</H5>
          </td>
          <td>
            <span>{data.percentage}</span>
            <H5>{data.amount}</H5>
          </td>
        </tr>
      ))}
    </>
  );
};

export default NewProductTableBody;
