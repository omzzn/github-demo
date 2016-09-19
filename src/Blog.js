import React, { PropTypes } from 'react'
import {gitMd} from './utiles/helper'
import marked from 'marked'

class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      value:'',
      wati:true
    }
  }
  componentDidMount(){
    let add=this.props.params.title  //在调用路由是的传入的路由变量值
     gitMd(add)
     .then( (res) => {
       this.setState({
         value:res.getMd,
         wait:false
       })
       console.log(this.state.value)
     })
  }
  render () {
   let content=this.state.wait ? "请稍等" : marked(this.state.value)
    return(
      <div>


          <div dangerouslySetInnerHTML={{__html:content}} />

      </div>
    )
  }
}

export default Blog;
