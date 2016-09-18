import React, { PropTypes } from 'react';
import Card from './components/Card';
import { gitJson} from './utiles/helper.js'
import Bg from './image/home1.jpg';

let cardData = [
  {title:'第一天',desc:'第一天描述',img:Bg,url:'a'},
  {title:'第二天',desc:'第二天描述',img:Bg,url:'b'},
  {title:'第三天',desc:'第三天描述',img:Bg,url:'c'},
  {title:'第四天',desc:'第四天描述',img:Bg,url:'d'},
  {title:'第五天',desc:'第五天描述',img:Bg,url:'e'}
]

class Work extends React.Component {
  constructor(){
    super()
    this.state={
      json:[],
      wait:true
    }
  }
  componentDidMount(){
     gitJson()
    .then((data)=>{
      this.setState({
        json:data.getJson,
        wait:false   //这里面的到的内容 给this.state 里面的内容 容易拿出去

      })
     console.log(this.state.json)
        // let card=json.map((item,i) => <Card {...item} key={i} />  )
      })

  }

  render () {
    let card=this.state.json.map((item,i) => <Card {...item} key={i} />)
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {this.state.wait ?"正在获取数据" :card}
        </div>
      </div>
    )
  }
}

export default Work;
