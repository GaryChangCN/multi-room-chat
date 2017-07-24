import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {increase,decrease,asyncG} from './../action/control';

function mapStateToProps(state){
	return {
		count:state.control.count
	}
}

function mapDispatchToProps(dispatch){
	return {
		de(){
			dispatch(decrease());
		},
		in(){
			dispatch(increase());
		},
		asyncG(){
			dispatch(asyncG())
		}
	}
}
class View extends Component {
	render(){
		return (
			<div className="container">
				<div className="view">
					{this.props.count}
				</div>
				<div className="control">
					<button onClick={this.props.de}>-</button>
					<button onClick={this.props.in}>+</button>
					<hr/>
					<button onClick={this.props.asyncG}>异步add</button>
				</div>
			</div>
		)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(View);