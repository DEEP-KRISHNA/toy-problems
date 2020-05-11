import React from 'react';
import { Text, ListView, View, TextInput, Button } from 'react-native';

function Task(props) {
    return <View>{props.name}, {props.dueDate.toLocaleTimeString()}</View>
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: props.list};

        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask(task) {
        console.log("add task clicked");
        this.state.list.push(task);
        this.setState({list: this.state.list})
    }
    render() {
        return (
            <View>
                <Text h1>TODO List</Text>
                <ListView>
                    {
                        this.state.list.map((t) =>
                            <Task key={t.id} name={t.name} dueDate={t.dueDate} />)
                    }
                </ListView>
                <TaskNameForm onAddTask={this.handleAddTask} />
            </View>
        );
    }
}

class TaskNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const taskList = this.props.taskList;
        // create a task object
        event.preventDefault();
        const task = {id:Date.now(), name: this.state.value, 
        dueDate: new Date()};
        // add the task object to the task list
        this.props.onAddTask(task);
    }

    handleChange(event) {
        // code to set the state of the component
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <View>
            <TextInput
                style={{ height: 40 }}
                placeholder="Add a Task"
                onChangeText={this.handleChange}
                defaultValue={this.state.value}
            />
            <Button
                onPress={this.handleSubmit}
                />
            </View>
        );
    }
}