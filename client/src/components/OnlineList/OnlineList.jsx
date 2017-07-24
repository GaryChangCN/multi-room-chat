import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import './OnlineList.less';

class OnlineList extends Component {
    constructor(props){
        super(props);
    }
    static defaultProps = {
        value: [1,2,3,4,5],
        owner: 1
    }
    render(){
        let {value, owner} = this.props;
        return (
            <ul className="online-list">
                <li>online member</li>
                {value.map((item,i) => {
                    return (
                        <li key = {i}>
                            <span>{item}</span>
                            {item === owner ? (<span className="owner">〇</span>) : null}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

function mapStateToProps({onlineList: {value, owner}}){
    return {
        value,owner
    }
}
export default connect(mapStateToProps,null)(OnlineList);