import React, { useState,useEffect } from 'react';
import { Button, Space, Table, Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const ModificarClasesForm = () => {
    const [clases, setClases] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchClases = async () => {
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:4040/clases');
                setClases(res.data);
            } catch (error) {
                console.error("Error al cargar clases:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClases();
    }, []);


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
                    <Button>Modificar</Button>
                    <Button>Eliminar</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Title level={2}>Modificar Clases</Title>
            <Table columns={columns} dataSource={clases} loading={loading} rowKey="_id" />
        </>
    );
};

export default ModificarClasesForm;