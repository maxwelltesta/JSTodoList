import React, { Component } from 'react'

export class ListTrash extends Component {
    render() {
        return (
            <div id="list_trash" onClick={this.props.toggleDeleteDialog}>&#128465;</div>
        )
    }
}

export default ListTrash
