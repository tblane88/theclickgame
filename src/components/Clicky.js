import React, { Component } from "react";
import Navbar from "./Navbar";
import ChoiceCard from "./ChoiceCard"
import players from "./players.json"

class Clicky
 extends Component {
  state = {
    players,
    score: 0,
    topScore: 0,
    correctClick: false
  };

  handleClick = (id, clicked) => {
    
    if (clicked) {
      alert("You Guessed Incorrectly!")
      const resetArray = this.state.players;
      resetArray.forEach(function (player) {
        player.clicked = false;
      })
      console.log(resetArray);
      this.setState({
        correctClick: false,
        score: 0,
        players: resetArray
      })
    } else {
    const updatedScore = this.state.score + 1;
    const index = id - 1;
    const updatedPlayers = this.state.players;

    updatedPlayers[index].clicked = true;
      console.log(updatedPlayers);
    this.setState({
      players: updatedPlayers,
      score: updatedScore,
      topScore: updatedScore,
      correctClick: true
    })
    }
    console.log(this.state.score)
  }

  

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          correctClick={this.state.correctClick}
        />
        <div className="row">
        {this.state.players.map(player => (
          <ChoiceCard
          id={player.id}
          name={player.name}
          image={player.image}
          clicked={player.clicked}
          handleClick = {this.handleClick}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Clicky
;
