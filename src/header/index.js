import { memo } from 'react';
import { Header_Container } from '../styles';

const Header = memo(() => (
  <Header_Container id="Header">
    <div className="Header__box">
      <h1 className="Header__title">Chess</h1>
    </div>
  </Header_Container>
));

export default Header;
