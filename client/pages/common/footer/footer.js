import moment from 'moment';
import footerTpl from './footer.art';
import './footer.scss';

const Footer = {
  getContent(option) {
    const data = Object.assign({}, option, {date: `1998~${moment().year()}`});
    return footerTpl(data);
  }
}

export default Footer;
