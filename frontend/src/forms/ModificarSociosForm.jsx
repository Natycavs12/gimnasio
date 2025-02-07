// import React, { useState, useEffect } from 'react';
import React, { useState,useEffect } from 'react';

import { Button, Space, Table, Modal , Popconfirm} from 'antd';
import AltaSocioForm from '../forms/AltaSocioForm';

const ModificarSociosForm = ({socios, handleSendForm, handleEliminar, abonos}) => {
    const [loading] = useState(false);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedSocio, setSelectedSocio] = useState(null);

    const handleModificar = (record) => {
        // setSelectedSocio(record);
        // window.alert("APRETASTE MODIFICAR EN FORMULARIO");
        setSelectedSocio({
            ...record,
            fechaNac: record.fechaNac ? record.fechaNac.split('T')[0] : null,
        });
        setOpen(true);
    };

    // const handleEliminar = () => {
    //     console.log("BOTON ELIMINAR");
    //     window.alert("APRETASTE ELIMINAR EN FORMULARIO");
    //     //LLAMAR A FORMULARIO ALTA PERO CON LOS DATOS DE LA LINEA DE LA TABLA ELEGIDA
    //     // TIENE QUE HACER EN EL SUBMIT EL DELETE DE LOS DATOS
    // };

    const handleOk = () => {
        // setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        // console.log('Clicked cancel button');
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
            dataIndex: 'correo',
            key: 'correo',
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
                        <Button type="primary" id="modificar" onClick={() => handleModificar(record)}>Modificar</Button>
                        {/* <Button id="modificar" onClick={handleModificar}>Modificar</Button> */}
                        <Popconfirm
                            title="¿Estás seguro de eliminar este socio?"
                            onConfirm={() => handleEliminar(record._id)}
                            okText="Sí"
                            cancelText="No"
                            placement="topRight"
                            trigger="click"
                            >

                        {/* <Modal
                            title="Modificar Datos de Socio"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        > */}
                        {/* <p>{modalText}</p> */}
                        {/* </Modal> */}
                        {/* <Button id="eliminar" onClick={handleEliminar(record)}>Eliminar</Button> */}
                        {/* <Button id="eliminar" danger onClick={() => handleEliminar(record._id)}>Eliminar</Button> */}
                        <Button id="eliminar" danger >Eliminar</Button>

                        </Popconfirm>
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
    // useEffect(() => {
    //     console.log("Abonos recibidos en ModifSocioForm:", abonos);
    // }, [abonos]);
    return (
        <>
            {/* <div>Lista de Socios / DATOS PERSONALES</div> */}
            {/* <Title level={2}>Información de Soci@s</Title> */}
            <Table columns={columns} dataSource={socios} loading={loading} rowKey="_id" />
            <Modal
                title="Modificar Datos de Socio"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {selectedSocio && <AltaSocioForm socio={selectedSocio} handleSendForm={handleSendForm} abonos={abonos} />}
            </Modal>
        </>
    );
};

export default ModificarSociosForm;
