import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'

export default class Habits extends Component {


    handleIncrement = (habit) => {
      this.props.onIncrement(habit)

    }
    handleDecrement = (habit) => {
      this.props.onDecrement(habit)
    }
    handleDelete =(habit) =>{
      this.props.onDelete(habit)
      // const habits = [...this.state.habits];

      // const index = habits.indexOf(habit);

      // habits.splice(index,1);

      // this.setState({habits : habits});
    }
    handleAdd = name => {
      this.props.onAdd(name)
    }
  render() {
    return (
      <>
      <HabitAddForm onAdd={this.handleAdd}/>
      <ul>
        {
            this.props.habits.map((habit,id) => (
                <Habit key={id} 
                habit={habit}   
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                />
            ) )
        }
      </ul>
      <button className="habits-reset" onClick={this.props.onReset}>Reset ALL</button>
      </>
    )
  }
}
