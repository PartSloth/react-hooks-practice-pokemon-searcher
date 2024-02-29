import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  });

  function handleOnChange(event) {
    const updateFormData = {...formData};
    updateFormData[event.target.name] = event.target.value;
    setFormData(updateFormData);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl
        }
      })
    })
    .then(res => res.json())
    .then(newPokemon => onAddPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleOnChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleOnChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleOnChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
