import React, { useState } from 'react';
import { Button, Space, Table, Typography, Modal } from 'antd';
import AltaSocioForm from '../forms/AltaSocioForm';

// const { Option } = Select;
const { Title } = Typography;

// const onChange = (value) => {
//     console.log(`selected ${value}`);
// };

// const onSearch = (value) => {
//     console.log('search:', value);
// };

const ModificarSociosForm = ({ socios }) => {
    // const [loading, setLoading] = useState(false);
    // const state = {
    //     socios: socios
    // }
    // console.log("socios"+socios);

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [modalText, setModalText] = useState('Content of the modal');
    const [selectedSocio, setSelectedSocio] = useState(null);

    const handleModificar = (record) => {
        setSelectedSocio(record);
        setOpen(true);
    };

    const handleOk = () => {
        // setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Apellido',
            dataIndex: 'apellido',
            key: 'apellido',
        },
        {
            title: 'DNI',
            dataIndex: 'dni',
            key: 'dni',
        },
        {
            title: 'Telefono',
            dataIndex: 'telefono',
            key: 'telefono',
        },
        {
            title: 'Fecha Nacimiento',
            dataIndex: 'fechaNac',
            key: 'fechaNac',
        },
        {
            title: 'E-Mail',
            dataIndex: 'email',
            key: 'email',
        },
        // {
        //   title: 'Apto Médico',
        //   dataIndex: 'apto',
        //   key: 'apto',
        // }, NO BORRAR, POSIBLE UPDATE
        // {
        //   title: 'Clase/s',
        //   dataIndex: 'clase',
        //   key: 'clase',
        // },
        // {
        //   title: 'ABONO',
        //   dataIndex: 'abono',
        //   key: 'abono',
        // },
        {
            title: 'Acciones',
            key: 'action',
            render: (_, record) => (
                <>


                    <Space size="middle">
                        {/* <Button id="modificar" onClick={handleModificar}>Modificar</Button> */}
                        <Button id="modificar" onClick={() => handleModificar(record)}>Modificar</Button>

                        {/* <Modal
                            title="Modificar Datos de Socio"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        > */}
                            {/* <p>{modalText}</p> */}
                        {/* </Modal> */}
                        <Button id="eliminar" onClick={handleEliminar}>Eliminar</Button>
                        {/* <Modal
                            title="Title"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <p>{modalText}</p>
                        </Modal> */}
                    </Space>
                </>
            ),
        },
    ];

    const handleEliminar = () => {
        console.log("BOTON ELIMINAR");
        //LLAMAR A FORMULARIO ALTA PERO CON LOS DATOS DE LA LINEA DE LA TABLA ELEGIDA
        // TIENE QUE HACER EN EL SUBMIT EL DELETE DE LOS DATOS
    };

    // const handleModificar = () => {
    //     console.log("BOTON MODIFICAR");
    //     window.alert("APRETASTE MODIFICAR");
        //LLAMAR A FORMULARIO ALTA PERO CON LOS DATOS DE LA LINEA DE LA TABLA ELEGIDA
        // TIENE QUE HACER EN EL SUBMIT EL UPDATE DE LOS DATOS
    // }

    // const handleClick = () => {
    //     var boton = ''
    //     // Aquí defines lo que ocurre cuando se hace clic en el botón
    //     console.log('Botón clickeado');
    //     // var modifica = document.getElementById("modificar");
    //     // boton = document.getElementById("eliminar");
    //     boton = document.getElementById("modificar");
    //     // console.log("El valor del boton es: " + valueOf(boton));
    //     var valor = document.querySelector("#modificar");
    //     console.log("valor boton"+valor);
    //     if (boton == "modificar") {
    //         console.log("el boton es modificar");
    //     } else if (boton == "eliminar") {
    //         console.log("el boton es eliminar");
    //     }
    // };


    return (
        <>
            {/* <div>Lista de Socios / DATOS PERSONALES</div> */}
            <Title level={2}>Información de Soci@s</Title>
            <Table columns={columns} dataSource={socios} />
            <Modal
                title="Modificar Datos de Socio"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {selectedSocio && <AltaSocioForm socio={selectedSocio} />}
            </Modal>
        </>

    );

};

export default ModificarSociosForm;
