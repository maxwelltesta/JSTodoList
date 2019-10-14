import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import AddItem from './AddItem.png'

const Sorting = {
    TASK_INCREASING: "TASK_INCREASING",
    TASK_DECREASING: "TASK_DECREASING",
    DUE_DATE_INCREASING: "DUE_DATE_INCREASING",
    DUE_DATE_DECREASING: "DUE_DATE_DECREASING",
    STATUS_INCREASING: "STATUS_INCREASING",
    STATUS_DECREASING: "STATUS_DECREASING"
  }

export class ListItemsTable extends Component {
    state = {
        currentSortingCriteria: null
    }
    setTask = () => {
        if (this.state.currentSortingCriteria === Sorting.TASK_INCREASING) {
            this.setState({
                currentSortingCriteria: Sorting.TASK_DECREASING
            })
        }
        else {
            this.setState({
                currentSortingCriteria: Sorting.TASK_INCREASING
            })
        }
        this.props.sortByTask(this.state.currentSortingCriteria);
    }
    setDueDate = () => {
        if (this.state.currentSortingCriteria === Sorting.DUE_DATE_INCREASING) {
            this.setState({
                currentSortingCriteria: Sorting.DUE_DATE_DECREASING
            })
        }
        else {
            this.setState({
                currentSortingCriteria: Sorting.DUE_DATE_INCREASING
            })
        }
        this.props.sortByDueDate(this.state.currentSortingCriteria);
    }
    setStatus = () => {
        if (this.state.currentSortingCriteria === Sorting.STATUS_INCREASING) {
            this.setState({
                currentSortingCriteria: Sorting.STATUS_DECREASING
            })
        }
        else {
            this.setState({
                currentSortingCriteria: Sorting.STATUS_INCREASING
            })
        }
        this.props.sortByStatus(this.state.currentSortingCriteria);
    }
    render() {
        return (
            <div id="list_items_container">
                <div className="list_item_header_card">
                    <div className="list_item_task_header" onClick={this.setTask}>Task</div>
                    <div className="list_item_due_date_header" onClick={this.setDueDate}>Due Date</div>
                    <div className="list_item_status_header" onClick={this.setStatus}>Status</div>
                </div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem}
                            todoList={this.props.todoList}
                            loadList={this.props.loadList} 
                            goItemScreen={this.props.goItemScreen.bind(this, todoItem)} />
                    ))
                }
                <div 
                    className="list_item_add_card"
                    onClick={this.props.goItemScreen.bind(this, {
                        "key": this.props.todoList.items.length,
                        "description": null,
                        "due_date": null,
                        "assigned_to": null,
                        "completed": false
                    })}
                >
                    <img src={AddItem} />
                </div>
            </div>
        )
    }
}

export default ListItemsTable
