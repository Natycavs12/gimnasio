// import React, { useState,useEffect } from 'react';
import React, { useState } from 'react';

import { Button, Space, Table, Modal, Popconfirm } from 'antd';
import CrearClaseForm from '../forms/CrearClaseForm';

const ModificarClasesForm = ({ clases, handleSendForm, handleEliminar }) => {
    const [loading] = useState(false);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [modalText, setModalText] = useState('Content of the modal');
    const [selectedClase, setselectedClase] = useState(null);

    const handleModificar = (record) => {
        // setselectedClase(record);
        // window.alert("APRETASTE MODIFICAR EN FORMULARIO");
        setselectedClase({
            ...record,

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
            title: 'Nombre de la Clase',
            dataIndex: 'nombreClase',
            key: 'nombreClase',
        },
        {
            title: 'Instructor',
            dataIndex: 'instructor',
            key: 'instructor',
        },
        {
            title: 'Día',
            dataIndex: 'dia',
            key: 'dia',
        },
        {
            title: 'Hora',
            dataIndex: 'hora',
            key: 'hora',
        },
        {
            title: 'Cupo',
            dataIndex: 'cupo',
            key: 'cupo',
        },
        {
            title: 'Acciones',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* <Button>Modificar</Button> */}
                    {/* <Button>Eliminar</Button> */}
                    <Button type="primary" id="modificar" onClick={() => handleModificar(record)}>Modificar</Button>
                    <Popconfirm
                        title="¿Estás seguro de eliminar la clase?"
                        onConfirm={() => handleEliminar(record._id)}
                        okText="Sí"
                        cancelText="No"
                        placement="topRight"
                        trigger="click"
                    >

                        <Button id="eliminar" danger >Eliminar</Button>
                    </Popconfirm>

                </Space>
            ),
        },
    ];

    return (
        <>
            {/* <Title level={2}>Modificar/Eliminar Clases</Title> */}
            {/* <Table columns={columns} dataSource={clases} loading={loading} rowKey="_id" /> */}
            <Table columns={columns} dataSource={clases} loading={loading} rowKey="_id" />
            <Modal
                title="Modificar Clase"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {selectedClase && <CrearClaseForm clase={selectedClase} handleSendForm={handleSendForm} />}
            </Modal>
        </>
    );
};

export default ModificarClasesForm;