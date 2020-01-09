import React from "react";

import Pokedex from "components/Pokedex";
import PokemonLineup from "components/PokemonLineup";
import PokemonData from "components/PokemonData";

function App() {
  return (
    <div className="main-wrap">
      <div className="container border">
        <div className="row">
          <div className="col-8 border-right">
            <div className="row">
              <PokemonLineup />
              <PokemonData />
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <Pokedex />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
