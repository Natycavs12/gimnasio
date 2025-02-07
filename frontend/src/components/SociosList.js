import React, { Component } from 'react'
import axios from 'axios';

import { Typography } from 'antd';

import ModificarSociosForm from '../forms/ModificarSociosForm';
import AltaSocioForm from '../forms/AltaSocioForm';

const { Title } = Typography;

export default class SociosList extends Component {
  state = {
    socios: [],
    loading: false,
  }

  async componentDidMount() { // HACE GET SOCIOS 
    this.setState({ loading: true });
    try {

      const res = await axios.get('http://localhost:4040/socios');

      const socios = res.data.map(socio => ({
        ...socio,
        key: socio._id,
      }));
      // this.setState({ socios: res.data });
      // console.log(this.state.socios);
      this.setState({ socios, loading: false });
    }

    catch (error) {
      console.error("Error fetching socios:", error);
      this.setState({ loading: false });
      throw error;
    }
  }

  getSocios = async () => { // HACE GET SOCIOS
    try {
      const response = await axios.get('http://localhost:4040/socios');
      return response.data.map(socio => ({
        ...socio,
        key: socio._id,
      }));
    } catch (error) {
      console.error('Error fetching socios:', error);
      throw error;
    }
  };

  // handleSendForm = async (formData) => { // HACE POST SOCIOS
  //   try {
  //     const response = await axios.post('http://localhost:4040/socios', formData);
  //     alert(response.data.message || 'Socio creado con éxito SOCIOSLIST');
  //     // Actualiza la lista de socios después de agregar uno nuevo
  //     const socios = await this.getSocios();
  //     this.setState({ socios });
  //   } catch (error) {
  //     console.error('Error al enviar los datos:', error);
  //     alert('Error al crear el socio SOCIOSLIST');
  //   }
  // };
  handleSendForm = async (formData) => {
    try {
        if (formData._id) {
            // Si hay un ID, hacemos una actualización (PUT)
            const response = await axios.put(`http://localhost:4040/socios/${formData._id}`, formData);
            alert(response.data.message || 'Socio actualizado con éxito SOCIOSLIST');
        } else {
            // Si no hay ID, creamos un nuevo socio (POST)
            const response = await axios.post('http://localhost:4040/socios', formData);
            alert(response.data.message || 'Socio creado con éxito SOCIOSLIST');
            // const socios = await this.getSocios();
            // this.setState({ socios });
        }

        // Actualiza la lista de socios
        const socios = await this.getSocios();
        // const socios = await axios.get('http://localhost:4040/socios')
        this.setState({ socios });

    } catch (error) {
        console.error('Error al enviar los datos SOCIOSLIST:', error);
        alert('Error al procesar la solicitud SOCIOSLIST');
    }
};


  handleEliminar = async (id) => { // HACE DELETE SOCIOS
    try {
      console.log("ELIMINANDO SOCIO DESDE SOCIOSLIST",id);
      const response = await axios.delete(`http://localhost:4040/socios/${id}`);
      alert(response.data.message || 'Socio eliminado con éxito');
      // Actualiza la lista de socios después de eliminar uno
      const socios = await this.getSocios();
      this.setState({ socios });
    } catch (error) {
      console.error('Error al eliminar el socio:', error);
      alert('Error al eliminar el socio');
    }
  };

  render() {
    // console.log('Renderizando SociosList');
    const { selectedKey, options, abonos } = this.props;
    // console.log("abonos en socios list:"+abonos.nombre);
    // const { socios, loading } = this.state;
    // const { handleSendForm } = this.props;
    // console.log("Abonos en sociosList:", JSON.stringify(abonos, null, 2));
    return (
      <>
        {selectedKey === 'alta_socio' && (
          <>
            {/* <div> */}
            {/* <h2>Alta de Socios</h2> */}
            <Title level={2}>Alta de Socio</Title>

            <AltaSocioForm handleSendForm={this.handleSendForm} options={options} socio={this.state.socios} abonos={abonos}/>
          </>
        )}
        {/* <h2>Modificar Socios</h2> 
        <ModificarSociosForm socios={this.state.socios} handleSendForm={this.handleSendForm} /> */}
        {selectedKey === 'modifica_socio' && (
          <>

            <Title level={2}>Gestionar Socios</Title>
            <ModificarSociosForm 
              socios={this.state.socios} 
              handleSendForm={this.handleSendForm} 
              handleEliminar={this.handleEliminar}
              abonos={abonos} />
          </>
        )}
      </>);

  }
}
