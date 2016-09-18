import React, { PropTypes } from 'react';
import {seachgit} from "./utiles/helper.js"

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      value:""
    }
  }
  componentDidMount(){ //页面加载后执行这个
  }
serch(e){
  let Value=e.target.value
  
  this.setState({
    value:Value
  })
}  //改变Value
jump(){
   let uers=this.state.value
   seachgit(uers)  //用参数来改变路径
   //这个data是上一次获得返还的值
   .then((data)=>{ //获取数据后执行 data 是 上一个then 返回的
      this.setState({
        data:data.data,
        wait:false   //用来证明收到数据完成了
      })
      console.log(this.state.data)

   })

}
  render () {
    let person=(
      <div>
        <h3>{this.state.data.name}</h3>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return(
      <div>
        <input type="text" placeholder="输入github uesr" value={this.state.value} onChange={this.serch.bind(this)} ref="user"/>
        <button onClick={this.jump.bind(this)}>搜索</button>
        {
          this.state.wait ? '正在获取数据' :
          person

        }
      </div>
    )
  }
}

export default About;
