import React, { useState, useEffect } from 'react';

import { Button, Space, Table, Typography, Modal } from 'antd';
import ModifPrecioAbonoForm from '../forms/ModifPrecioAbonoForm';

const { Title } = Typography;

const ModificarAbonosForm = ({ abonos, handleSendForm }) => {

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedAbono, setSelectedAbono] = useState(null);

    const handleModificar = (record) => {
        // setSelectedSocio(record);
        // window.alert("APRETASTE MODIFICAR EN FORMULARIO");
        setSelectedAbono({
            ...record,
        });
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
        // console.log('Clicked cancel button');
        setOpen(false);
    };

    const columns = [
        {
            title: 'Abono',
            dataIndex: 'nombreAbono',
            key: 'nombreAbono',
        },
        {
            title: 'Precio',
            dataIndex: 'precio',
            key: 'precio',
        },
        {
            title: 'Duración (días)',
            dataIndex: 'duracionDias',
            key: 'duracionDias',
        },
        {
            title: 'Acciones',
            key: 'action',
            render: (_, record) => (
                <>


                    <Space size="middle">
                        <Button id="modificar" onClick={() => handleModificar(record)}>Modificar</Button>
                        {/* <Button id="eliminar" onClick={handleEliminar}>Eliminar</Button> */}
                    </Space>
                </>
            ),
        },
    ];
    // useEffect(() => {
    //     console.log("Abonos recibidos en ModifAbonoForm:", abonos);
    // }, [abonos]);
    return (
        <>
            {/* <div>Lista de Socios / DATOS PERSONALES</div> */}
            {/* <Title level={2}>Información de Soci@s</Title> */}
            <Table columns={columns} dataSource={abonos} loading={loading} rowKey="_id" />
            <Modal
                title="Modificar datos de Abono"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {selectedAbono && <ModifPrecioAbonoForm abono={selectedAbono} handleSendForm={handleSendForm} />}
                {/* {selectedAbono && <AltaAbonoForm abono={selectedAbono} handleSendForm={handleSendForm}/>} */}
            </Modal>
        </>
    );
};

export default ModificarAbonosForm;