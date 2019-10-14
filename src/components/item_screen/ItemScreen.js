import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    onDescriptionChange = (e) => {
        if (e.target.value === "" || e.target.value === null) {
            this.props.currentItem.description = "Default";
        }
        else {
            this.props.currentItem.description = e.target.value;
        }
    }
    onAssignedToChange = (e) => {
        if (e.target.value === "" || e.target.value === null) {
            this.props.currentItem.assigned_to = "Default";
        }
        else {
            this.props.currentItem.assigned_to = e.target.value;
        }
    }
    onDueDateChange = (e) => {
        if (e.target.value === "" || e.target.value === null) {
            this.props.currentItem.due_date = "2000-01-01";
        }
        else {
            this.props.currentItem.due_date = e.target.value;
        }
    }
    onCompletedChange = (e) => {
        this.props.currentItem.completed = e.target.checked;
    }
    render() {
        return (
            <div id="todo_item">
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">
                    <span id="item_description_prompt" className="item_prompt">Description: </span>
                    <input type="text" id="item_description_textfield" className="item_input" 
                    defaultValue={this.props.todoItem.description} onChange={this.onDescriptionChange}/>
        
                    <span id="item_assigned_to_prompt" className="item_prompt">Assigned To: </span>
                    <input type="text" id="item_assigned_to_textfield" className="item_input" 
                    defaultValue={this.props.todoItem.assigned_to} onChange={this.onAssignedToChange}/>

                    <span id="item_due_date_prompt" className="item_prompt">Due Date: </span>
                    <input type="date" id="item_due_date_picker" className="item_input" 
                    defaultValue={this.props.todoItem.due_date} onChange={this.onDueDateChange}/>

                    <span id="item_completed_prompt" className="item_prompt">Completed: </span>
                    <input type="checkbox" id="item_completed_checkbox" className="item_input" 
                    defaultChecked={this.props.todoItem.completed} onChange={this.onCompletedChange}/>
            
                    <div id="item_form_button_container">
                        <input type="button" value="Submit" id="item_form_submit_button"
                        onClick={(this.props.todoItem.key < this.props.todoList.items.length) ? this.props.processEditItem.bind(this) : this.props.processSubmitNewItem.bind(this)}/>
                        <input type="button" value="Cancel" id="item_form_cancel_button" onClick={this.props.loadList.bind(this, this.props.todoList)}/>
                    </div>
                </div>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
