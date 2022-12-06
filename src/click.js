import { Component } from "react";

const seed = ["Matt", "Jake", "Ross", "Michale"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: ""
        };
    }

    // setSomeState = (label) => {
    //   console.log(label);
    //   this.setState({ tab: label });
    // };


    // Doesn't matter what type of this function is

    setSomeState(label) {
        console.log(label);
        this.setState({ tab: label });
    }

    render() {
        const { tab } = this.state;
        return (
            <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
                <h1>{tab ? tab : "No Value Selected"}</h1>
                {seed.map((label, index) => (
                    <h2
                        key={`${label} ${index}`}
                        onClick={() => this.setSomeState(label)}
                        style={{
                            background: "#efefef",
                            padding: "20px",
                            cursor: "pointer"
                        }}
                    >
                        {label}
                    </h2>
                ))}
            </div>
        );
    }
}

export default App;