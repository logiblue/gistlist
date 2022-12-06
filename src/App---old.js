import './App.css';
import React from "react";

// export default App;
class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      users: '',
      setUsers: '',
      DataHasLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch(
      "https://api.github.com/users/logiblue/gists")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataHasLoaded: true
        });
      })
    // async format
    const getData = async () => {
      const res = await fetch('https://api.github.com/users/logiblue/gists');
      const data = await res.json();
      setUsers(data);
    };
  }

  render() {

    const { DataHasLoaded, items } = this.state;
    let rawfile = 1;
    // const rawUrl = item.files[0];

    // console.log(items);

    if (!DataHasLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>  {

          items.map((item) => (
            <ol key={item.id} >
              TITLE -  {item.description},
              {console.log(rawfile = Object.values(item.files)[0].raw_url)}
              Url  - {
                // (async () => {
                //   const response = await fetch(rawfile.toString());
                //   const template = await response.text();
                //   // console.log(template);
                // })()
              }
              <a target="_blank" href={rawfile}>Open Link</a>
            </ol>
          ))
        }
      </div>
    );
  }
}

export default App;



