// Importar formularios
import AltaSocioForm from '../forms/AltaSocioForm';
// import ModificaSocioForm from './forms/ModificaSocioForm';
// import CreaClaseForm from './forms/CreaClaseForm';
import React, { Component } from 'react'
import axios from 'axios';

import {
    SmileOutlined,
    TeamOutlined,
    DribbbleOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';
// import { Menu, Typography, Form, Input, Button, DatePicker, Space, Select, AutoComplete } from 'antd';

import { Menu, Typography } from 'antd';
const { Title } = Typography;

// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';


// dayjs.extend(customParseFormat);
// const dateFormat = 'YYYY/MM/DD';

/** Manually entering any of the following formats will perform date parsing */
// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
// const customWeekStartEndFormat = (value) =>
//     `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
//         .endOf('week')
//         .format(weekFormat)}`;



// const onChange = (value) => {
//     console.log(`selected ${value}`);
// };

// const onSearch = (value) => {
//     console.log('search:', value);
// };

const items = [
    {
        key: '1',
        icon: <SmileOutlined />,
        label: 'Socios',
        children: [
            {
                key: 'alta_socio',
                label: 'Alta de Soci@',
            },
            {
                key: 'modifica_socio',
                label: 'Modificar datos de Soci@s',
            },
            {
                key: 'baja_socio',
                label: 'Baja de Soci@',
            },
        ],

    },
    {
        key: '2',
        icon: <DribbbleOutlined />,
        label: 'Clases',
        children: [
            {
                key: 'crea_clase',
                label: 'Crear Clase',
            },
            {
                key: 'modifica_clase',
                label: 'Modificar Clase', // debe existir en la BBDD
            },
            {
                key: 'cancela_clase',
                label: 'Dar de baja Clase',
            },
        ],

    },
    {
        key: '3',
        icon: <TeamOutlined />,
        label: 'Profesores',
        children: [
            {
                key: 'alta_profe',
                label: 'Alta/Baja de Profesor/a',
            },
            {
                key: 'modifica_profe',
                label: 'Modificación de Profesor/a',
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
                label: 'Modificar Abono',
            },
        ],
    },
];


export default class gestionGeneral extends Component {
    state = {
        selectedKey: null, // Estado para rastrear la opción seleccionada
        options: [], // Estado para las opciones del AutoComplete
        abonos: []
    };

    async componentDidMount() {
        try {

            const res = await axios.get('http://localhost:4040/abonos');
            // console.log(res);
            const abonos = res.data.map(abono => ({
                key: abono._id,
                nombre: abono.nombre,
                precio: abono.precio,
                duracionDias: abono.duracionDias,
            }));
            // this.setState({ socios: res.data });
            console.log(this.state.abonos);
            this.setState({ abonos });
        }

        catch (error) {
            console.error("Error fetching socios:", error);
        }
    }


    handleMenuClick = (e) => {
        this.setState({ selectedKey: e.key });
    };

    handleSendForm = (e) => {
        console.log("FORMULARIO ENVIADO");
    }

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
                    // })
                })),
            });
        }
        // })
        // });
    };

    renderContent = () => {
        const { selectedKey, options } = this.state;

        switch (selectedKey) {
            case 'alta_socio':
                return (
                    <AltaSocioForm
                        handleSendForm={this.handleSendForm}
                        handleSearch={this.handleSearch}
                        options={options}
                        onChange={() => { }}
                        onSearch={() => { }}
                    />
                );
            //     <Form layout="vertical" style={{ maxWidth: 400 }}>
            //         <Form.Item label="Nombre">
            //             <Input placeholder="Nombre" />
            //         </Form.Item>
            //         <Form.Item label="Apellido">
            //             <Input placeholder="Apellido" />
            //         </Form.Item>
            //         <Form.Item label="DNI">
            //             <Input placeholder="DNI" type='number' />
            //         </Form.Item>
            //         <Form.Item label="Teléfono">
            //             <Input placeholder="Teléfono" type='number' />
            //         </Form.Item>
            //         <Form.Item label="E-mail">
            //             <AutoComplete style={{ width: 200, }} placeholder="E-mail" onSearch={this.handleSearch} options={options} />
            //         </Form.Item>
            //         <Form.Item label="Fecha de Nacimiento">
            //             <Space direction="vertical" size={12}>
            //                 <DatePicker defaultValue={dayjs('01/01/2024', dateFormatList[0])} format={dateFormatList} />
            //             </Space>
            //         </Form.Item>
            //         <Form.Item label="Tipo de Abono">
            //             <Select
            //                 showSearch
            //                 placeholder="Seleccione el tipo de Abono"
            //                 optionFilterProp="label"
            //                 onChange={onChange}
            //                 onSearch={onSearch}
            //                 options={[
            //                     {
            //                         value: 'jack',
            //                         label: 'Jack',
            //                     },
            //                     {
            //                         value: 'lucy',
            //                         label: 'Lucy',
            //                     },
            //                     {
            //                         value: 'tom',
            //                         label: 'Tom',
            //                     },
            //                 ]}
            //             />
            //         </Form.Item>

            //         <Form.Item>
            //             <Button type="primary" onClick={this.handleSendForm}>Guardar</Button>
            //         </Form.Item>
            //     </Form>
            // );
            case 'modifica_socio':
                return <p>Formulario para modificar datos de soci@s.</p>;
            case 'crea_clase':
                return <p>Formulario para crear una clase.</p>;
            case 'modifica_clase':
                return <p>Formulario para modificar una clase.</p>;
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

                <div
                    style={{
                        width: 256,
                    }}
                >

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
