import React, { Component } from 'react'
import axios from 'axios';

import { Typography } from 'antd';

import ModificarAbonosForm from '../forms/ModificarAbonosForm';

const { Title } = Typography;

export default class AbonosList extends Component {

  state = {
    abonos: [],
    loading: false,
  }

  // handleClick = () => {
  //   // Aquí defines lo que ocurre cuando se hace clic en el botón
  //   console.log('Botón clickeado');
  // };

  handleSendForm = async (formData) => {
    // console.log("Datos enviados:", formData); // Verifica la estructura antes del POST/PUT
    // console.log("ID recibido:", formData._id); // ¿Es undefined?
    try {
      if (formData._id) {
        // Si hay un ID, hacemos una actualización (PUT)
        const response = await axios.put(`http://localhost:4040/abonos/${formData._id}`, formData);
        alert(response.data.message || 'abono actualizado con éxito aBONOSLIST');
      } else {
        // Si no hay ID, creamos un nuevo socio (POST)
        const response = await axios.post('http://localhost:4040/abonos', formData);
        alert(response.data.message || 'Abono creado con éxito ABONOSLIST');
        // const socios = await this.getSocios();
        // this.setState({ socios });
      }

      // Actualiza la lista de socios
      const abonos = await this.getAbonos();
      // const socios = await axios.get('http://localhost:4040/socios')
      this.setState({ abonos });

    } catch (error) {
      console.error('Error al enviar los datos ABONOSLIST:', error);
      alert('Error al procesar la solicitud ABONOSLIST');
    }
  };

  async componentDidMount() {

      this.setState({ loading: true });
      try {
  
        const res = await axios.get('http://localhost:4040/abonos');
        // console.log(res);
        const abonos = res.data.map(abono => ({
          ...abono,
          key: abono._id,
        }));
        // this.setState({ socios: res.data });
        // console.log(this.state.abonos);
        this.setState({ abonos });
      }
  
      catch (error) {
        console.error("Error fetching abonos:", error);
      }
    }
  // async componentDidMount() {
    getAbonos = async () => { // HACE GET SOCIOS

    this.setState({ loading: true });
    try {

      const res = await axios.get('http://localhost:4040/abonos');
      console.log(res);
      const abonos = res.data.map(abono => ({
        ...abono,
        key: abono._id,
      }));
      // this.setState({ socios: res.data });
      // console.log(this.state.abonos);
      this.setState({ abonos });
    }

    catch (error) {
      console.error("Error fetching abonos:", error);
    }
  }

  render() {
    const { selectedKey, options } = this.props;

    return (
      <>
        {/* <div>Lista de Socios / DATOS PERSONALES</div> */}
        <Title level={2}>Información de Abonos</Title>
        {/* <Table columns={columns} dataSource={this.state.abonos} /> */}
        <ModificarAbonosForm abonos={this.state.abonos} handleSendForm={this.handleSendForm} />

      </>
    )
  }
}
