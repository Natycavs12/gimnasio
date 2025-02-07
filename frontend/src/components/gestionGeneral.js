import React, { Component } from 'react'
import axios from 'axios';
import { Menu, Typography } from 'antd';
import {
    SmileOutlined,
    TeamOutlined,
    DribbbleOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';

// Importar formularios
// import AltaSocioForm from '../forms/AltaSocioForm';
// import ModificarSociosForm from '../forms/ModificarSociosForm';
// import CrearClaseForm from '../forms/CrearClaseForm';
// import ModificarClasesForm from '../forms/ModificarClasesForm';
import ClasesTabla from '../components/ClasesTabla';
import SociosList from '../components/SociosList';
import AbonosList from './AbonosList';
// import { handleSendForm } from '../components/SociosList';

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
        // socios: []
    };

    async componentDidMount() {
        try {

            const res = await axios.get('http://localhost:4040/abonos');
            // console.log(res);
            const abonos = res.data.map(abono => ({
                // value: abono._id,
                // label: abono.nombre,
                ...abono,
                key: abono._id,

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
    }


    handleMenuClick = (e) => {
        this.setState({ selectedKey: e.key });
    };


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
        const { selectedKey, options, abonos } = this.state;

        switch (selectedKey) {
            case 'alta_socio':
            case 'modifica_socio':
                // return <p>Formulario para modificar datos de soci@s.</p>;
                return <SociosList selectedKey={selectedKey} options={options} abonos={abonos}/>;

                // return <p>Formulario para crear una clase.</p>;
            case 'crea_clase':
            case 'modifica_clase':
                // new ClasesTabla();
                return <ClasesTabla selectedKey={selectedKey} options={options}/>;

            // return <p>Formulario para modificar una clase.</p>;

            // case 'cancela_clase':
            //     return <p>Formulario para dar de baja una clase.</p>;
            case 'alta_profe':
                return <p>Formulario para dar de alta a un profesor.</p>;
            case 'modifica_profe':
                return <p>Formulario para modificar los datos de un profesor.</p>;
            case 'modifica_abono':
                // return <p>Formulario para modificar un abono.</p>;
                return <AbonosList selectedKey={selectedKey} options={options}s/>;

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

                <div style={{ width: 256, }}>

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
