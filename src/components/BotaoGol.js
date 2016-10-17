import React from 'react';

export default class BotaoGol extends React.Component {

    handleClick(ev){
        ev.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Gol</button>
            </div>

        );
    }

}