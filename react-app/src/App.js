import React from 'react';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      displayText: "hej",
      imgSrc: null,
      recipeName: "",
      recipeInstr: "",
    };
    this.getData = this.getData.bind(this);
}
  render() {
    return <div className="outer">
            <h1>Welcome to the recipe suggester!</h1>
            <button onClick={this.getData}> Click to be suggested a recipe! </button>
            <div>
              {this.state.imgSrc === null ? <div></div> : <img src={this.state.imgSrc} width="600" height="600"></img>}
            </div>
            <h2>{this.state.recipeName}</h2>
            <div>{this.state.recipeInstr}</div>
            </div>
  }

  getData() {
    fetch("http://127.0.0.1:5000/getMealData")
    .then(response => 
    response.json()
    .then(json => {
      this.setState({imgSrc: json.meals[0].strMealThumb, recipeName: json.meals[0].strMeal, recipeInstr: json.meals[0].strInstructions})
    }))
    .catch(err => {
      throw new Error(err)
    })
    
  }
}


export default App;
