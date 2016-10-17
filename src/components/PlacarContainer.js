import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            golsCasa: 0,
            golsVisitante: 0
        }
    }

    marcarGolCasa() {
        this.setState({
            golsCasa: this.state.golsCasa + 1
        });
    }

    marcarGolVisitante() {
        this.setState({
            golsVisitante: this.state.golsVisitante + 1
        });
    }

    render() {
        const { partida, casa, visitante } = this.props;
        return (
            <div>
                <div>
                    <Time nome={casa.nome} gols={this.state.golsCasa} marcarGol={this.marcarGolCasa.bind(this)} />
                </div>
                <div>
                    <Partida {...partida} />
                </div>
                <div>
                    <Time nome={visitante.nome} gols={this.state.golsVisitante} marcarGol={this.marcarGolVisitante.bind(this)} />
                </div>
            </div>

        );
    }

}

PlacarContainer.propTypes = {
    clima: React.PropTypes.string,
    tempo: React.PropTypes.number.isRequired
};

PlacarContainer.defaultProps =  {
    clima: 'Ensolarado'
};