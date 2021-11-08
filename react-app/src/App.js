import React from 'react';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      displayText: "hej",
      recipeName: "",
      recipeInstr: "",
    };
    this.getData = this.getData.bind(this);
}
  render() {
    return <div>

            <button onClick={this.getData}> Click to be suggested a recipe! </button>
            <div>{this.state.recipeName}</div>
            <div>{this.state.recipeInstr}</div>
            </div>
  }

  getData() {
    fetch("http://127.0.0.1:5000/getMealData")
    .then(response => 
    response.json()
    .then(json => {
      this.setState({recipeName: json.meals[0].strMeal, recipeInstr: json.meals[0].strInstructions})
    }))
    .catch(err => {
      throw new Error(err)
    })
    
  }
}


export default App;
