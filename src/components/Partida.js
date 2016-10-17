import React from 'react';

export default class Time extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.estadio}</h2>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.horario}</span>
                    <p>Clima: {this.props.clima}</p>
                </div>
            </div>

        );
    }

}