import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey Sandy, Hello World!!</Text>
      <TodoList list={[]}/>
    </View>
  );
}

function Task(props) {
  return <View><Text>{props.name}, {props.dueDate.toLocaleTimeString()}</Text></View>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: props.list };

    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(task) {
    console.log("add task clicked");
    this.state.list.push(task);
    this.setState({ list: this.state.list })
  }
  render() {
    return (
      <View>
        <Text>TODO List</Text>
        <ScrollView>
          {
            this.state.list.map((t) =>
              <Task key={t.id} name={t.name} dueDate={t.dueDate} />)
          }
        </ScrollView>
        <TaskNameForm onAddTask={this.handleAddTask} />
      </View>
    );
  }
}

class TaskNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const taskList = this.props.taskList;
    // create a task object
    event.preventDefault();
    const task = {
      id: Date.now(), name: this.state.value,
      dueDate: new Date()
    };
    // add the task object to the task list
    this.props.onAddTask(task);
  }

  handleChange(temptext) {
    // code to set the state of the component
    console.log(temptext)
    this.setState({ value: temptext});
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
          onPress={this.handleSubmit} title = "Add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
