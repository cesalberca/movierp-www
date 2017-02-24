import React from 'react';
import ReactTable from 'react-table';

import { getSelfId } from './../utils/apiHelper';

import CellComponent from './CellComponent';

import './TableComponent.css';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.parseFields = this.parseFields.bind(this);
  }

  parseFields() {
    let parsedFields = [];
    this.props.data.forEach((field) => {
      let parsedField = Object.assign({}, field);
      parsedField['id'] = getSelfId(field);
      parsedFields.push(parsedField);
    });

    return parsedFields;
  }

  render() {
    const { columns, data, containerWidth, containerHeight } = this.props;
    return(
      <ReactTable
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: e => {
              if (rowInfo) {
                this.props.handleRowClick(rowInfo.index);
              }
            }
          }
        }}
        data={this.parseFields()}
        columns={columns}
        className="-striped -highlight"
        previousText="Anterior"
        nextText="Siguiente"
        loadingText="Cargando..."
        noDataText="No se han enontrado filas"
        pageText="Página"
        ofText="de"
        rowsText="Filas"/>
    );
  }
}

export default TableComponent;
