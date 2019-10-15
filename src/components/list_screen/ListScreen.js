import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';

export class ListScreen extends Component {
    state = {
        modal: "modal"
    }
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
    onNameChange = (e) => {
        if (e.target.value === "") {
            this.props.todoList.name = "Default";
        }
        else {
            this.props.todoList.name = e.target.value;
        }
    }
    onOwnerChange = (e) => {
        if (e.target.value === "") {
            this.props.todoList.owner = "Default";
        }
        else {
            this.props.todoList.owner = e.target.value;
        }
    }
    toggleDeleteDialog() {
        this.setState({
            modal: ((this.state.modal === "modal") ? "modal is_visible" : "modal")
        })
    }
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash toggleDeleteDialog={this.toggleDeleteDialog.bind(this)} />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input  
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield"
                            onChange={this.onNameChange} />
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
                <ListItemsTable 
                    todoList={this.props.todoList}
                    sortByTask={this.props.sortByTask}
                    sortByDueDate={this.props.sortByDueDate}
                    sortByStatus={this.props.sortByStatus}
                    loadList={this.props.loadList.bind(this, this.props.todoList)}
                    goItemScreen={this.props.goItemScreen.bind(this)} />
                <div className={this.state.modal}>
                    <div className="modal_dialog">
                        <h4>Delete List?</h4>
                        <h3>Are you sure you want to delete the list?</h3>
                        <input type="button" id="item_delete_submit_button" value="Yes" onClick={this.props.deleteList}/>
                        <input type="button" id="item_delete_cancel_button" value="No" onClick={this.toggleDeleteDialog.bind(this)}/>
                        <h4>The list will not be retrievable.</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListScreen
