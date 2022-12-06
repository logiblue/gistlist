import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gist from "react-gist";


// export default App;
class App extends React.Component {
  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      users: '',
      setUsers: '',
      DataHasLoaded: false,
      tab: ""
    };
  }


  // setSomeState = (label) => {
  //   console.log(label);
  //   this.setState({ tab: label });
  // };

  //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
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch("https://api.github.com/users/logiblue/gists",
      { method: 'GET', headers: {} })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataHasLoaded: true
        });
      })

  }
  setSomeState(label) {
    console.log(label);
    this.setState({ tab: label });
  }

  render() {
    const { tab } = this.state;
    const { DataHasLoaded, items } = this.state;
    let rawfile = 1;

    // const rawUrl = item.files[0];

    console.log(items);

    if (!DataHasLoaded) return <div>
      <h1> Please wait some time.... </h1> </div>;
    return (
      <div className="App">
        <h1> Lookup a gist from github </h1>
        <div className='main-container'>
          <div className='left-side'>
            {

              items.map((item, index) => (
                <div className='left-side-single' key={item.id} >

                  <h2
                    key={`${item.id} ${index}`}
                    onClick={() => this.setSomeState(<Gist id={item.id} file={Object.values(item.files)[0].filename} />
                    )}
                    style={{
                      background: "#efefef",
                      padding: "20px",
                      cursor: "pointer"
                    }}
                  >
                    {item.description}
                  </h2>
                </div>
              ))

            }
          </div>
          <div className='right-side'>{tab ? tab : "No Value Selected"}</div>

        </div>
      </div>
    );
  }
}

export default App;



