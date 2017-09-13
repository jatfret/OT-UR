import moment from 'moment';
import headerTpl from './header.art';

const Header = {
  getContent(option) {
    return headerTpl(option);
  }
}

export default Header;
