import React from 'react';
import React, { Component } from 'react';
// Import komponents
import Table from 'js/Table';
import Form from 'js/Form';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;