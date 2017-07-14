import React from 'react';
import './style.less';

class Item extends React.Component {
  constructor(props,context) {
    super(props,context);

  }
  render(){
    const data = this.props.data;
    return (
      <div className="clear-fix order-item-container">
           <div className="order-item-img float-left">
               <img src={data.img}/>
           </div>
           <div className="order-item-comment float-right">
               <button>评价</button>
           </div>
           <div className="order-item-content">
               <span>商户：{data.title}</span>
               <span>数量：{data.count}</span>
               <span>价格：￥{data.price}</span>
           </div>
       </div>
    )
  }
  componentDidMount() {

  }

}

export default Item;
