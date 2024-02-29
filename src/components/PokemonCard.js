import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {name, hp, sprites} = pokemon;
  const [sprite, setSprite] = useState(sprites.front);

  function handleCardClick(event) {
    if(sprite === sprites.front) {
      setSprite(sprite => sprites.back);
    } else {
      setSprite(sprite => sprites.front);
    }
  }

  return (
    <Card>
      <div onClick={handleCardClick}>
        <div className="image">
          <img src={sprite} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
