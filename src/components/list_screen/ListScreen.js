import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }
    onNameChange = () => {
        this.props.todoList.name = this.value;
        this.props.setState({currentList: this.props.todoList});
    }
    onOwnerChange() {

    }
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input  
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield"
                            onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield"
                            onChange={this.onOwnerChange} />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} />
            </div>
        )
    }
}

export default ListScreen
