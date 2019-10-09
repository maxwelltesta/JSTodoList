import React, { Component } from 'react'
import MoveUp from './MoveUp.png'
import MoveDown from './MoveDown.png'
import Close from './Close.png'

export class ListItemCard extends Component {
    render() {
        return (
            <div className='list_item_card'>
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
                    <div id="list_item_card_button" className="list_item_card_button">
                        <img src={MoveUp}/>
                    </div>
                    <div id="list_item_card_button" className="list_item_card_button">
                        <img src={MoveDown}/>
                    </div>
                    <div id="list_item_card_button" className="list_item_card_button">
                        <img src={Close}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItemCard
