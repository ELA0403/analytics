import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { InformationCommonPropsType } from "../../../../../Types/Apps/SearchResult/SearchResultTypes";
import { H4, LI, P, UL } from "../../../../../AbstractElements";
import ShowRatings from "./ShowRatings";

const InformationCommon = ({ item }: InformationCommonPropsType) => {
  return (
    <div className="info-block">
      <Link to={Href}>{item.url}</Link>
      <H4>{item.title}</H4>
      <P>{item.detail}</P>
      <div className="star-ratings">
        <UL className="search-info simple-list flex-row">
          {item.showStar ? <ShowRatings item={item.showStar} /> : ""}
          <LI>{item.star}</LI>
          <LI>{item.vote}</LI>
          <LI>{item.news}</LI>
        </UL>
      </div>
    </div>
  );
};

export default InformationCommon;
