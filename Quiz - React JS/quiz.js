ReactDOM.render(<h1>Welcome to Quiz</h1>, document.getElementById('root'));

const quoestions = []

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                <h1> Hey Sandy</h1>
                <h2> it is {this.state.date.toLocaleTimeString()} Now!!</h2>
            </div>  
        );
    }
}

class QuizQ extends React.Component {
    constructor(props) {
        super(props)
        console.log("QuizQ Object Created")
        // console.log(QuizT.timerID);
        this.state = {};
        this.onSubmt = this.onSubmt.bind(this)

    }
    onSubmt() {
        console.log("QuizQ Method Called")
        // this.setState({ q : new QuizT()})
        this.props.onStop();
        console.log(QuizT.time)
    }
    render() {
        return (<div><button onClick={this.onSubmt}>Submit the quiz?</button></div>);
    }
}

class QuizT extends React.Component {
    static time = 0
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        console.log("QuizT Object Created")
    }

    start() {
        // new QuizQ({ onSubmt: this.stop });
        // <QuizQ onSubmt={this.stop} />;
        ReactDOM.render(<QuizQ onStop = {this.stop}/>, document.getElementById('quizq'));
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    stop() {
        clearInterval(this.timerID);
    }

    tick() {
        const newcounter = this.state.counter + 1
        QuizT.time = newcounter
        this.setState({ counter: newcounter })
    }

    render() {
        return (
            <div>
                {this.state.counter != 0 ? <div><h2>Timer: {this.state.counter}</h2></div> : <button onClick={this.start}>start The Quiz</button> } 
                {/* <button onClick={this.stop}>Submit The Results</button> */}
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<QuizT />, document.getElementById('quizt'));

