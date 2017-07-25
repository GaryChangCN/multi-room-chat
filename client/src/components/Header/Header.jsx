import React,{Component} from 'react';
import {connect} from 'react-redux';
import {updateMessageList} from '../../store/action/msgList'

import './Header.less';
class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="pageHeader flex">
                <span>{this.props.title}</span>
                <span onClick={this.props.change}>quit</span>
            </div>
        )
    }
}
function mapStateToProps({header:{title}}){
    return {
        title
    }
}
function mapDispatchToProps(dispatch){
    return {
        change(){
            dispatch(updateMessageList());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)