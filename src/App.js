// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Card from "./Card";

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const values = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const cards = [];
    values.forEach((value) => {
      cards.push({ value, id: cards.length + 1 });
      cards.push({ value, id: cards.length + 1 });
    });
    setCards(shuffle(cards));
  }, []);

  const handleCardClick = (card) => {
    if (selectedCards.length === 2) {
      return;
    }

    setSelectedCards([...selectedCards, card]);

    if (selectedCards.length === 1 && selectedCards[0].value === card.value) {
      setMatches([...matches, selectedCards[0].id, card.id]);
      setSelectedCards([]);
    }
  };

  const shuffle = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Memory Game</h1>
      <div className="row">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

