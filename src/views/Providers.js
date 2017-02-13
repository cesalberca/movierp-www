import React from 'react';

import { selectAll } from './../utils/apiHelper';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';


class Providers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      providers: [],
      isOpen: false
    };

    this.columns = [
      {
        name: 'ID',
        field: 'idProveedor'
      },
      {
        name: 'Nombre Comerical',
        field: 'nombre_comerical'
      },
      {
        name: 'Nombre Fiscal',
        field: 'nombre_fiscal'
      },
      {
        name: 'Dirección',
        field: 'direccion'
      },
      {
        name: 'C.I.F.',
        field: 'cif'
      }
    ];

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  handleOpenModal() {
    this.setState({isOpen: true});
  }

  handleCloseModal() {
    this.setState({isOpen: false});
  }

  refresh() {
    selectAll('providers')
    .then((response) => {
      this.setState({providers: response})
    });
  }

  render() {
    return (
      <div>
        <h1>Proveedores</h1>

        <FormActions handleOpenModal={this.handleOpenModal} refresh={this.refresh}/>

        <TableComponent data={this.state.providers} columns={this.columns} />

        <ModalForm modalTitle="Modal proveedores" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="providers" title="Nuevo Proveedor" actionButtonText="Crear nuevo proveedor"/>
        </ModalForm>
      </div>
    );
  }
}
export default Providers;
