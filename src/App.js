import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    currentItem: null
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
    this.setState({currentItem: null});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    this.setState({currentItem: null});
  }

  goItemScreen = (itemToLoad) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({currentItem: itemToLoad});
  }

  processEditItem = () => {
    let newList = this.state.currentList;
    newList.items[this.state.currentItem.key] = this.state.currentItem;
    let newLists = this.state.todoLists;
    newLists[newList.key] = newList;
    this.setState({
      currentList: newList,
      todoLists: newLists
    })
    this.loadList(this.state.currentList);
  }
  processSubmitNewItem = () => {
    if (this.state.currentItem.description === "" || this.state.currentItem.description === null) {
      this.state.currentItem.description = "Default";
    }
    if (this.state.currentItem.assigned_to === "" || this.state.currentItem.assigned_to === null) {
      this.state.currentItem.assigned_to = "Default";
    }
    if (this.state.currentItem.due_date === "" || this.state.currentItem.due_date === null) {
      this.state.currentItem.due_date = "2000-01-01";
    }
    let newList = this.state.currentList;
    newList.items.push(this.state.currentItem);
    let newLists = this.state.todoLists;
    newLists[this.state.currentList.key] = this.state.currentList;
    this.setState({
      currentList: newList,
      todoLists: newLists
    })
    this.loadList(this.state.currentList);
  }
  sortByTask(direction) {
    let newList = this.state.currentList;
    if (direction === "TASK_INCREASING") {
      newList.items.sort((a, b) => a.description > b.description).map((item, i) => item.key=i);
    }
    else {
      newList.items.sort((a, b) => a.description < b.description).map((item, i) => item.key=i);
    }
    let newLists = this.state.todoLists;
    newLists[newList.key] = newList;

    this.setState({
      currentList: newList,
      todoLists: newLists
    })
    this.loadList(this.state.currentList);
  }
  sortByDueDate(direction) {
    let newList = this.state.currentList;
    if (direction === "DUE_DATE_INCREASING") {
      newList.items.sort((a, b) => a.due_date > b.due_date).map((item, i) => item.key=i);
    }
    else {
      newList.items.sort((a, b) => a.due_date < b.due_date).map((item, i) => item.key=i);
    }
    let newLists = this.state.todoLists;
    newLists[newList.key] = newList;

    this.setState({
      currentList: newList,
      todoLists: newLists
    })
    this.loadList(this.state.currentList);
  }
  sortByStatus(direction) {
    let newList = this.state.currentList;
    if (direction === "STATUS_INCREASING") {
      newList.items.sort((a, b) => a.completed > b.completed).map((item, i) => item.key=i);
    }
    else {
      newList.items.sort((a, b) => a.completed < b.completed).map((item, i) => item.key=i);
    }
    let newLists = this.state.todoLists;
    newLists[newList.key] = newList;

    this.setState({
      currentList: newList,
      todoLists: newLists
    })
    this.loadList(this.state.currentList);
  }
  addNewList(item) {
    let newList = item;
    let newLists = this.state.todoLists;
    newLists.push(newList);
    this.setState({
      todoLists: newLists
    })
    this.loadList(newList);
  }
  deleteList() {
    let newLists = this.state.todoLists;
    newLists.splice(this.state.currentList.key, 1);
    newLists.map((item, i) => item.key=i);
    this.setState({
      currentList: null,
      todoLists: newLists
    })
    this.goHome();
  }
  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)}
        todoLists={this.state.todoLists} 
        addNewList={this.addNewList.bind(this)}/>;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
        goHome={this.goHome.bind(this)}
        todoList={this.state.currentList}
        loadList={this.loadList.bind(this)}
        sortByTask={this.sortByTask.bind(this)}
        sortByDueDate={this.sortByDueDate.bind(this)}
        sortByStatus={this.sortByStatus.bind(this)}
        goItemScreen={this.goItemScreen.bind(this)} 
        deleteList={this.deleteList.bind(this)}/>;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
        currentScreen={this.state.currentScreen}
        loadList={this.loadList.bind(this)}
        todoList={this.state.currentList} 
        todoItem={this.state.currentItem}
        currentItem={this.state.currentItem}
        processEditItem={this.processEditItem.bind(this)}
        processSubmitNewItem={this.processSubmitNewItem.bind(this)}/>;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;