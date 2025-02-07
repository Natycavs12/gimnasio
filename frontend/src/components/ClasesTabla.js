import React, { Component } from 'react'
import axios from 'axios';

import { Typography } from 'antd';

import ModificarClasesForm from '../forms/ModificarClasesForm';
import CrearClaseForm from '../forms/CrearClaseForm';

const { Title } = Typography;

export default class ClasesTabla extends Component {
    state = {
        clases: [],
        loading: false,
    }

    // async componentDidMount() {
    //     this.setState({ loading: true });
    //     try {

    //         const res = await axios.get('http://localhost:4040/clases');
    //         // const clases = res.data.map(clase => ({
    //         //     key: clase._id,
    //         //     nombreClase: clase.nombreClase,
    //         //     instructor: clase.instructor,
    //         //     dia: clase.dia,
    //         //     hora: clase.hora,
    //         //     cupo: clase.cupo,
    //         // }));
    //         const clases = res.data.map(clase => ({
    //             ...clase,
    //             key: clase._id,
    //         }));
    //         this.setState({ clases });
    //     }
    //     catch (error) {
    //         console.error("Error fetching clases:", error);
    //     }
    // }

    async componentDidMount() {
        this.setState({ loading: true });
        try {
            const res = await axios.get('http://localhost:4040/clases');
            const clases = res.data.map(clase => ({
                ...clase,
                key: clase._id,
            }));
            this.setState({ clases, loading: false });
            // const clases = await this.getClases();
            // this.setState({ clases, loading: false });
        } catch (error) {
            console.error("Error fetching clases CLASESTABLA:", error);
            this.setState({ loading: false });
            throw error;
        }
    }

    getClases = async () => { // HACE GET CLASES
        try {
            const response = await axios.get('http://localhost:4040/clases');
            return response.data.map(clase => ({
                ...clase,
                key: clase._id,
            }));
        } catch (error) {
            console.error('Error fetching clases:', error);
            throw error;
        }
    };

    // handleSendForm = async (formData) => { // HACE POST CLASES
    //     try {
    //         const response = await fetch('http://localhost:4040/clases', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         if (!response.ok) {
    //             throw new Error(`Error del servidor: ${response.status}`);
    //         }

    //         const result = await response.json();
    //         alert(result.message || 'Clase creada con éxito');
    //         // Actualiza la lista de clases después de agregar una nueva
    //         this.componentDidMount();
    //         // formData.resetFields();

    //     } catch (error) {
    //         console.error('Error al enviar los datos:', error);
    //         alert('Error al crear la clase');
    //     }
    // };

    // handleSendForm = async (formData) => { // HACE POST CLASES
    //     // console.log("Datos Formulario:",formData);
    //     try {
    //         const response = await axios.post('http://localhost:4040/clases', formData);
    //         alert(response.data.message || 'Clase creado con éxito CLASESTABLA');
    //         // Actualiza la lista de socios después de agregar uno nuevo
    //         const clases = await this.getClases();
    //         this.setState({ clases });
    //     } catch (error) {
    //         console.error('Error al enviar los datos:', error);
    //         alert('Error al crear la clase CLASESTABLA');
    //     }
    // };

    handleSendForm = async (formData) => {
            // console.log("Enviando datos:", formData); //  Verifica la estructura antes del POST
        
        try {
            if (formData._id) {
                // Si hay un ID, hacemos una actualización (PUT)
                const response = await axios.put(`http://localhost:4040/clases/${formData._id}`, formData);
                alert(response.data.message || 'Clase actualizado con éxito CLASESTABLA');
            } else {
                // Si no hay ID, creamos un nuevo socio (POST)
                const response = await axios.post('http://localhost:4040/clases', formData);
                alert(response.data.message || 'Clase creado con éxito CLASESTABLA');
                // const socios = await this.getSocios();
                // this.setState({ socios });
            }
    
            // Actualiza la lista de socios
            const clases = await this.getClases();
            this.setState({ clases });
    
        } catch (error) {
            console.error('Error al enviar los datos CLASESTABLA:', error);
            alert('Error al procesar la solicitud CLASESTABLA');
        }
    };
    
    handleEliminar = async (id) => { // HACE DELETE CLASES
        try {
            console.log("ELIMINANDO CLASE DESDE CLASESTABLA",id);
            const response = await axios.delete(`http://localhost:4040/clases/${id}`);
            alert(response.data.message || 'Clase eliminada con éxito');
            // Actualiza la lista de clases después de eliminar uno
            const clases = await this.getClases();
            this.setState({ clases });
        } catch (error) {
            console.error('Error al eliminar la clase:', error);
            alert('Error al eliminar la clase');
        }
    };


    render() {
        const { selectedKey, options } = this.props;

        return (
            <>
                {selectedKey === 'crea_clase' && (
                    <>
                        {/* <div> */}
                        {/* <h2>Alta de Socios</h2> */}
                        <Title level={2}>Nueva Clase</Title>

                        <CrearClaseForm handleSendForm={this.handleSendForm} options={options} clase={this.state.clases} />
                    </>
                )}
                {/* <h2>Modificar Socios</h2> 
            <ModificarSociosForm socios={this.state.socios} handleSendForm={this.handleSendForm} /> */}
                {selectedKey === 'modifica_clase' && (
                    <>

                        <Title level={2}>Gestionar Clases</Title>
                        <ModificarClasesForm clases={this.state.clases} handleSendForm={this.handleSendForm} 
                        handleEliminar={this.handleEliminar}/>
                    </>
                )}
            </>);
        // <>
        //     <ModificarClasesForm
        //         // handleSendForm={this.handleSendForm}
        //         // handleSearch={this.handleSearch}
        //         // options={options} //mail options
        //         // onChange={() => { }}
        //         // onSearch={() => { }}
        //         // abonos={abonos} 
        //         clases={this.state.clases}
        //         handleSendForm={this.handleSendForm}

        //     />
        // </>
        // )
    }
}
