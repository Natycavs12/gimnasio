// Importar formularios
import AltaSocioForm from '../forms/AltaSocioForm';
import ModificarSociosForm from '../forms/ModificarSociosForm';
import CrearClaseForm from '../forms/CrearClaseForm';
import ModificarClasesForm from '../forms/ModificarClasesForm';

import React, { Component } from 'react'
import axios from 'axios';

import {
    SmileOutlined,
    TeamOutlined,
    DribbbleOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';

import { Menu, Typography } from 'antd';
const { Title } = Typography;


const items = [
    {
        key: '1',
        icon: <SmileOutlined />,
        label: 'Socios',
        children: [
            {
                key: 'alta_socio',
                label: 'Dar alta de Soci@',
            },
            {
                key: 'modifica_socio',
                label: 'Modificar/Eliminar Soci@s',
            },
            // {
            //     key: 'baja_socio',
            //     label: 'Baja de Soci@',
            // },
        ],

    },
    {
        key: '2',
        icon: <DribbbleOutlined />,
        label: 'Clases',
        children: [
            {
                key: 'crea_clase',
                label: 'Crear clase',
            },
            {
                key: 'modifica_clase',
                label: 'Modificar/Eliminar clase',
            }, // debe existir en la BBDD
            // {
            //     key: 'cancela_clase',
            //     label: 'Dar de baja Clase',
            // },
        ],

    },
    {
        key: '3',
        icon: <TeamOutlined />,
        label: 'Profesores',
        children: [
            {
                key: 'alta_profe',
                label: 'Alta de Profesores/as',
            },
            {
                key: 'modifica_profe',
                label: 'Modificar/Eliminar Profesores/as',
            },
        ],

    },
    {
        key: '4',
        label: 'Abonos',
        icon: <DollarCircleOutlined />,
        children: [
            {
                key: 'modifica_abono',
                label: 'Modificar Abonos',
            },
        ],
    },
];


export default class gestionGeneral extends Component {
    state = {
        selectedKey: null, // Estado para rastrear la opción seleccionada
        options: [], // Estado para las opciones del AutoComplete
        abonos: [], // Lista de abonos cargados desde el servidor
        socios: []
    };

    async componentDidMount() {
        try {

            const res = await axios.get('http://localhost:4040/abonos');
            // console.log(res);
            const abonos = res.data.map(abono => ({
                value: abono._id,
                label: abono.nombre,
                // precio: abono.precio,
                // duracionDias: abono.duracionDias,
            }));
            // this.setState({ socios: res.data });
            // console.log(this.state.abonos);
            this.setState({ abonos });
        }

        catch (error) {
            console.error("Error al cargar abonos:", error);
        }
    // }
    // async cargarSocios() {
        // try {

        //     const res = await axios.get('http://localhost:4040/socios');
        //     // console.log(res);
        //     const socios = res.data.map(socio => ({
        //         // value: socio._id,
        //         // label: socio.nombre,
        //         // precio: socio.precio,
        //         // duracionDias: socio.duracionDias,
        //         key: socio._id,
        //         nombre: socio.nombre,
        //         apellido: socio.apellido,
        //         dni: socio.dni,
        //         telefono: socio.telefono,
        //         fechaNac: socio.fechaNac,
        //         correo: socio.correo,
        //     }));
        //     // this.setState({ socios: res.data });
        //     // console.log("socios EN GS GRAL"+this.state.socios);
        //     this.setState({ socios });
        // }

        // catch (error) {
        //     console.error("Error al cargar abonos:", error);
        // }
    }


    // handleFormChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // }

    handleMenuClick = (e) => {
        this.setState({ selectedKey: e.key });
    };

    // handleSendForm = async (e) => {
    //     console.log("FORMULARIO ENVIADO");
    //     console.log('Datos enviados:', formData);

    //     try {
    //         // const response = await fetch('http://localhost:4000/socios', {
    //         //     method: 'POST',
    //         //     headers: {
    //         //         'Content-Type': 'application/json',
    //         //     },
    //         //     body: JSON.stringify(formData),
    //         // });
    //         const result = await response.json();
    //         alert(result.message);
    //     } catch (error) {
    //         console.error('Error al enviar los datos:', error);
    //         alert('Error al enviar el formulario');
    //     }
    // }

    handleSearch = (value) => {
        // setOptions(() => {
        if (!value || value.includes('@')) {
            // return [];
            this.setState({ options: [] });
        } else {
            this.setState({
                options: ['gmail.com', 'hotmail.com', 'outlook.com.ar', 'yahoo.com.ar'].map((domain) => ({
                    label: `${value}@${domain}`,
                    value: `${value}@${domain}`,
                })),
            });
        }

    };

    renderContent = () => {
        // const { selectedKey, options, abonos, socios} = this.state;
        const { selectedKey, options} = this.state;

        switch (selectedKey) {
            case 'alta_socio':
                return (
                    <AltaSocioForm
                        handleSendForm={this.handleSendForm}
                        handleSearch={this.handleSearch}
                        options={options} //mail options
                        onChange={() => { }}
                        onSearch={() => { }}
                        // abonos={abonos}
                    />
                );
            case 'modifica_socio':
                // return <p>Formulario para modificar datos de soci@s.</p>;
                return (
                    <ModificarSociosForm
                        // handleSendForm={this.handleSendForm}
                        // handleSearch={this.handleSearch}
                        // // options={options} //mail options
                        // onChange={() => { }}
                        // onSearch={() => { }}
                        // // abonos={abonos}
                        // socios={socios}
                    />
                );

            case 'crea_clase':
                // return <p>Formulario para crear una clase.</p>;
                return (
                    <CrearClaseForm
                        handleSendForm={this.handleSendForm}
                        handleSearch={this.handleSearch}
                        options={options} //mail options
                        onChange={() => { }}
                        onSearch={() => { }}
                        // abonos={abonos}
                    />
                );
            case 'modifica_clase':
                // return <p>Formulario para modificar una clase.</p>;
                return (
                    <ModificarClasesForm
                        // handleSendForm={this.handleSendForm}
                        // handleSearch={this.handleSearch}
                        // options={options} //mail options
                        // onChange={() => { }}
                        // onSearch={() => { }}
                        // abonos={abonos}
                    />
                );
            case 'cancela_clase':
                return <p>Formulario para dar de baja una clase.</p>;
            case 'alta_profe':
                return <p>Formulario para dar de alta a un profesor.</p>;
            case 'modifica_profe':
                return <p>Formulario para modificar los datos de un profesor.</p>;
            case 'modifica_abono':
                return <p>Formulario para modificar un abono.</p>;
            default:
                return <p>Seleccione una opción del menú.</p>;
        }
    };



    render() {
        return (<>
            <Title level={2}>Gestión de Altas, Bajas y Modificaciones</Title>
            <div style={{ display: 'flex' }}>
                {/* <div
                    style={{
                        width: 46,
                    }}> */}

                <div style={{ width: 256,}}>

                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        items={items}
                        onClick={this.handleMenuClick} // Escucha clics en el menú
                    />
                </div>
                <div style={{ marginLeft: 20, flex: 1 }}>
                    {this.renderContent()} {/* Muestra el contenido dinámico */}
                </div>
            </div>


        </>
        )
    }
}
