import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imgSrc: null,
      recipeName: "",
      recipeInstr: "",
    };
    this.getData = this.getData.bind(this);
}
  render() {
    return <div className="grid-container">
            <div className="headerArea"> Welcome to the Recipe Suggester!</div>
            <div className="buttonArea"><button onClick={this.getData}> Click me! </button></div>
            <div className="imgArea">{this.state.imgSrc === null ? <div></div> : <img src={this.state.imgSrc} id="pic"></img>}</div>  
            <div className="textArea">
              <div><h2>{this.state.recipeName}</h2></div>
              <p>{this.state.recipeInstr}</p></div>
            </div>
  }

  getData() {
    fetch("http://127.0.0.1:5000/getMealData")
    .then(response => 
    response.json()
    .then(json => {
      this.setState({
        imgSrc: json.meals[0].strMealThumb, 
        recipeName: json.meals[0].strMeal, 
        recipeInstr: json.meals[0].strInstructions
      })
    }))
    .catch(err => {
      this.setState({recipeInstr: err})
    })
    
  }
}


export default App;
