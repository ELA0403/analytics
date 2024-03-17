import { Card, CardBody } from "reactstrap";
import { H5, LI, P, UL } from "../../../../../AbstractElements";
import FeatherIcons from "../../../../../utils/CommonSvgIcon/FeatherIcons";
import { servicesData } from "../../../../../Data/Apps/Ecommerce/ProductPageData";

const ProductStatus = () => {
  return (
    <Card>
      <CardBody>
        <div className="collection-filter-block">
          <UL className="pro-services simple-list">
            {servicesData.map((data,index) => (
              <LI key={index}>
                <div className="d-flex">
                  <FeatherIcons iconName={data.icon} />
                  <div className="flex-grow-1">
                    <H5>{data.title} </H5>
                    <P>{data.subtitle}</P>
                  </div>
                </div>
              </LI>
            ))}
          </UL>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductStatus;
