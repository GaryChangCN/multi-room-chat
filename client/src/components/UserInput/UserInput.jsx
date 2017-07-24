import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {clearUserInput, sendUserInput, onChangeUserInput} from '../../store/action/userInput';
import './UserInput.less';

class UserInput extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleKeyDown(e){
        let {keyCode} = e;
        if (keyCode === 13) {
            if(e.ctrlKey || e.metaKey) {
                this.handleSubmit();
            }
        }
    }
    handleChange(e){
        let {value} = e.target;
        this.props.onChange(value);
    }
    handleSubmit(){
        let {onSubmit, value} = this.props;
        onSubmit(value);
    }
    render(){
        let {value, clearUserInput} = this.props;
        return (
            <div className="user-input">
                <div className="control">
                    <div className="clear" onClick={clearUserInput}>清空</div>
                    <div className="submit" onClick={this.handleSubmit}>发送</div>
                </div>
                <textarea cols="20" rows="8"
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    value={value}
                ></textarea>
            </div>
        )
    }
}

function mapStateToProps({userInput: {value}}){
    return {
        value
    }
}

function mapDispatchToProps(dispatch){
    return {
        onChange(value){
            onChangeUserInput(dispatch, value);
        },
        onSubmit(value){
            sendUserInput(dispatch, value);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);