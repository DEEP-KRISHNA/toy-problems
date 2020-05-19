function Task(props) {
    return (<div>
        <li>
            {/* .toLocaleTimeString() */}
            {props.name} {props.dueDate.toLocaleTimeString()}
            <span> </span>
            <button onClick={props.deltask} data-taskid={props.keyid}>Delete</button>
            <span> </span>
            <input type="checkbox" onClick={props.chktask} data-taskid={props.keyid} defaultChecked={props.check} />
        </li>
    </div>)
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: props.list};
        this.taskId = ""
        this.handleAddTask = this.handleAddTask.bind(this);
        this.deletetask = this.deletetask.bind(this);
        this.checkboxtask = this.checkboxtask.bind(this);
    }
    handleAddTask(task) {
        console.log("add task clicked");
        this.state.list.push(task);
        this.setState({ list: this.state.list })
        const formdata = new FormData()
        const formrequest = new XMLHttpRequest()
        formdata.append('username', JSON.stringify(this.state.list))
        formrequest.open('POST', '/api/add');
        formrequest.send(formdata);
        formrequest.onload = () => {
            console.log("api insert")
        }
    }
    deletetask(event) {
        console.log("delete task clicked");
        console.log(event.target.getAttribute("data-taskid"));
        var taskId = Number(event.target.getAttribute("data-taskid"))
        // console.log(taskId)
        // console.log("Hi")
        // console.log(this.state.list)
        var taskList = this.state.list.filter((t) => {
            // console.log(t.id != taskId)
            if (t.id != taskId)
                return t;
            }
        );
        this.setState({ list: taskList })
    }

    checkboxtask(event) {
        console.log(event.target.getAttribute("data-taskid"));
        var taskId = Number(event.target.getAttribute("data-taskid"))
        var taskList = []
        for (var index = 0; index < this.state.list.length; index++) {
            var temptask = this.state.list[index];
            if (temptask.id === taskId) {
                temptask.check = !(temptask.check)
                taskList.push(temptask)
            }
            else {
                taskList.push(temptask)
            }
        }
        console.log(taskList)
        this.setState({ list: taskList })
    }

    render() {
        return (
            <div>
                <h1>TODO List</h1>
                <ol>
                    {
                        this.state.list.map((t) =>
                            <Task key={t.id} keyid={t.id} check={t.check} name={t.name} dueDate={t.dueDate} deltask={this.deletetask} chktask={this.checkboxtask}/>)
                    }
                </ol>
                <TaskNameForm onAddTask={this.handleAddTask} />
            </div>
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
        dueDate: new Date(), check: false};
        // add the task object to the task list
        this.props.onAddTask(task);
    }

    handleChange(event) {
        // code to set the state of the component
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} 
                onChange={this.handleChange}/>
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}

var data = null
const request = new XMLHttpRequest()
request.open('GET', '/api/get');
request.send()
request.onload = () => {
    data = (request.responseText);
}
if (data === "") {
    data = null
}
console.log("sandy",data)

ReactDOM.render(
    <TodoList list={[]} />,
    document.getElementById('todo')
);