import moment from 'moment';
import Header from '../common/header/header.js';
import Footer from '../common/footer/footer.js';
import template from './template.art';
import './home.scss';

const home = {
  initialize(){
    this.loadData();
    this.showPublic();
  },
  loadData(){
    fetch('http://127.0.0.1:3000/api/list')
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      const tpl = this.getTempate(json);
      console.log(json)
      document.getElementsByClassName("home-page")[0].innerHTML = tpl;
    });
  },
  getTempate(data){
    return template(data);
  },
  showPublic(){
    document.getElementById('page-header')
      .innerHTML = Header.getContent();
    document.getElementById('page-footer')
      .innerHTML = Footer.getContent();
  }

};

(function(){
  home.initialize();
})()
