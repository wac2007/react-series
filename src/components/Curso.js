import React from 'react';


const cursos = [
    {nome: 'NodeJS'},
    {nome: 'React'},
    {nome: 'Django'}
];

export default class Curso extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h2 className="">Curso: {cursos[this.props.params.id].nome}</h2>
        );
    }
}