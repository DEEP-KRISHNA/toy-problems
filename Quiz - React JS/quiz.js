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

let dic = [{ q: "TS CM", o1: "KSR", o2: "KRS", o3: "SRK", o4: "KCR", ans: 4, you: -1 },
{ q: "AP CM", o1: "NBC", o2: "BBC", o3: "NCB", o4: "JCB", ans: 3, you: -1 }
]

class QuizQ extends React.Component {
    constructor(props) {
        super(props)
        console.log("QuizQ Object Created")
        // console.log(QuizT.timerID);
        this.state = {current: 0};
        this.dispele = []
        this.onSubmt = this.onSubmt.bind(this)
        this.chktask = this.chktask.bind(this)
        this.nexxt = this.nexxt.bind(this)
        this.prevv = this.prevv.bind(this)
        for (var index = 0; index < dic.length; index++) {
            var t = dic[index];
            var qele = (
                <div>
                    <h1>{t.q}</h1>
                    <input type="radio" defaultChecked={false} name="quoes" onClick={this.chktask} data-index={index} data-opt={1}/>
                    <span>{t.o1}</span>
                    <input type="radio" defaultChecked={false} name="quoes" onClick={this.chktask} data-index={index} data-opt={2}/>
                    <span>{t.o2}</span>
                    <input type="radio" defaultChecked={false} name="quoes" onClick={this.chktask} data-index={index} data-opt={3}/>
                    <span>{t.o3}</span>
                    <input type="radio" defaultChecked={false} name="quoes" onClick={this.chktask} data-index={index} data-opt={4}/>
                    <span>{t.o4}</span>
                    <br/>
                    <br/>
                    <button onClick={this.nexxt}>Next</button>
                    <span> </span>
                    <button onClick={this.prevv}>Prev</button>
                </div>
            )
            this.dispele.push(qele)
        }
        // console.log(this.dispele)
        // console.log(this.dic)

        // < input type = "checkbox" onClick = { props.chktask } data-taskid={ props.keyid } defaultChecked = { props.check } />
        
    }
    onSubmt() {
        console.log("QuizQ Method Called")
        // this.setState({ q : new QuizT()})
        this.props.onStop();
        console.log(QuizT.time)
        ReactDOM.render("", document.getElementById('quizq'));
    }
    chktask() {
        console.log(event.target)
        var ind = event.target.getAttribute("data-index")
        var opt = event.target.getAttribute("data-opt")
        dic[ind].you = opt
        console.log(dic)
        // console.log(opt)
    }
    prevv() {
        let temp = this.state.current;
        // console.log(dic.length)
        if (temp === 0) {
            curr = dic.length-1
        }
        else {
            var curr = (temp - 1) % dic.length    
        }
        console.log(curr)
        this.setState({ current: curr })
    }

    nexxt() {
        let temp = this.state.current;
        // console.log(dic.length)
        var curr = (temp + 1) % dic.length
        console.log(curr)
        this.setState({ current: curr })
    }

    render() {
        return (<div>
            <button onClick={this.onSubmt}>Submit the quiz?</button>
            <div id="quoestion">
                {this.dispele[this.state.current]}
            </div> 
        </div>);
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

