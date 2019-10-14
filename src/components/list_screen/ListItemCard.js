import React, { Component } from 'react'
import MoveUp from './MoveUp.png'
import MoveDown from './MoveDown.png'
import Close from './Close.png'

export class ListItemCard extends Component {
    processMoveItemUp = (e) => {
        e.stopPropagation();
        let key = Number(this.props.listItem.key);

        let item1 = this.props.todoList.items[key];
        let item2 = this.props.todoList.items[key-1];
        
        this.props.todoList.items[key] = item2;
        this.props.todoList.items[key].key += 1;
        this.props.todoList.items[key-1] = item1;
        this.props.todoList.items[key-1].key -= 1;

        this.props.loadList();
    }
    processMoveItemDown = (e) => {
        e.stopPropagation();
        let key = Number(this.props.listItem.key);

        let item1 = this.props.todoList.items[key];
        let item2 = this.props.todoList.items[key+1];
        
        this.props.todoList.items[key] = item2;
        this.props.todoList.items[key].key -= 1;
        this.props.todoList.items[key+1] = item1;
        this.props.todoList.items[key+1].key += 1;

        this.props.loadList();
    }
    processDeleteItem = (e) => {
        e.stopPropagation();
        let key = Number(this.props.listItem.key);

        this.props.todoList.items.splice(key, 1);
        for(var i = (key); i < this.props.todoList.items.length; i++){
            this.props.todoList.items[i].key -= 1;
        }
        this.props.loadList();
    }
    render() {
        return (
            <div className='list_item_card' onClick={this.props.goItemScreen.bind(this, this.props.todoItem)}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                {this.props.listItem.completed ? (
                    <div className='list_item_card_completed'>
                        Completed
                    </div>
                ) : ( 
                    <div className='list_item_card_not_completed'>
                        Pending
                    </div>
                )}
                <div className="list_item_card_toolbar">
                    <div 
                        id="list_item_card_button" 
                        className={(this.props.listItem.key === 0) ? "list_item_card_button disabled" : "list_item_card_button"}
                        onClick={this.processMoveItemUp.bind(this)}>
                        <img src={MoveUp}/>
                    </div>
                    <div 
                        id="list_item_card_button" 
                        className={(this.props.listItem.key === (this.props.todoList.items.length-1)) ? "list_item_card_button disabled" : "list_item_card_button"}
                        onClick={this.processMoveItemDown.bind(this)}>
                        <img src={MoveDown}/>
                    </div>
                    <div 
                        id="list_item_card_button"
                        className="list_item_card_button"
                        onClick={this.processDeleteItem.bind(this)}>
                        <img src={Close}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItemCard
