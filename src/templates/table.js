import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead className="thead-dark">
            <tr>
                <th>Tipo Trans.</th>
                <th>CD/Loja</th>
                <th>Nota</th>
                <th>Fornecedor</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.tipo_trans}</td>
                <td>{row.cd_loja}</td>
                <td>{row.nota}</td>
                <td>{row.fornecedor}</td>                
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table className="table table-striped table-hover">
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

export default Table;