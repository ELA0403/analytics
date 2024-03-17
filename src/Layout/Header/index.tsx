import SearchBar from './SearchBar/SearchBar';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import { Row } from 'reactstrap';
import RightHeader from './RightHeader/RightHeader';

const index = () => {
  return (
    <Row className="header-wrapper m-0">
      <HeaderLogo />
      <SearchBar />
      <RightHeader />
    </Row>
  )
}

export default index