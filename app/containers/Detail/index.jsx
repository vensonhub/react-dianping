import React from 'react';
import Header from '../../components/Header';
import './style.less';
class Detail extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    const id= this.props.params.id;
    return (
      <div>
        <Header title="商户详情"/>
      </div>
    )
  }
}
export default Detail;