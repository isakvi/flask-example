import React from 'react';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      displayText: "hej"
    };
    this.getData = this.getData.bind(this);
}
  render() {
    return <div>

            <button onClick={this.getData}> Click me! </button>
            <p>{this.state.displayText}</p>
            </div>
  }

  getData() {
    fetch("http://127.0.0.1:5000/getExternalData")
    .then(response => 
    response.json()
    .then(json => {
      this.setState({
        displayText: json.text
      })
    }))
    .catch(err => {
      throw new Error(err)
    })
    
  }
}


export default App;
