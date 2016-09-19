import axios from 'axios';
function seachgit(xxx){
  let address=`https://api.github.com/users/${xxx}`
  return axios.get(address)
  .then( (res) => ({
      data:res.data    //后台获取的数据

  }
))
  .catch(function (error) {
    alert(error);
  });}


//在网上给你获取JSon数据
function gitJson(xxx){
  let address=`https://raw.githubusercontent.com/omzzn/data/master/card.json?${Math.random()}`
  return axios.get(address)
  .then( (res) => (  //res为网页的五项信息 只有data 最有用
    {
      getJson:res.data    //传出一个对象 对象里的getJSON属性是 res.data

  }
))
  .catch(function (error) {
    alert(error);
  });}


  function gitMd(xxx){
    let address=`https://raw.githubusercontent.com/omzzn/data/master/blog/${xxx}.md` //网址可以用参数来改变内容
    return axios.get(address)
    .then( (res) => (  //res为网页的五项信息 只有data 最有用
      {
        getMd:res.data    //传出一个对象 对象里的getJSON属性是 res.data

    }
  ))
    .catch(function (error) {
      alert(error);
    });}
export { gitJson,seachgit,gitMd }
