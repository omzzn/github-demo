import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
class Card extends React.Component {
  handleJump(){
    let address = this.props.url;   //由调用的给的 每调用一次就不一样
    hashHistory.push(`/blog/${address}`) //传入路由变量
  }
  render () {
    return(
      <div className="col-xs-6 col-sm-4">
        <div className="thumbnail">
          <img src={this.props.img} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <p><a className="btn btn-primary" role="button" onClick={this.handleJump.bind(this)}>Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  title:'我是标题',
  desc:'我是描述',
  img:'http://obmf232cc.bkt.clouddn.com/home1.jpg'
}
export default Card;
