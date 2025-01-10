import React, { Component } from 'react';

import {
    SmileOutlined,
    TeamOutlined,
    DribbbleOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';

import { Menu, Typography } from 'antd';
const { Title } = Typography;

const items = [
    // {
    //     key: '1',
    //     icon: <SmileOutlined />,
    //     label: 'Socios',
    //     children: [
    //         {
    //             key: '5',
    //             label: 'Buscar Soci@',
    //         },
    //     ],

    // },
    {
        key: '2',
        icon: <DribbbleOutlined />,
        label: 'Clases',
        children: [
            {
                key: '6',
                label: 'Crear Clase',
            },
            {
                key: '7',
                label: 'Asignar Profesor/a', // debe existir en la BBDD
            },
            {
                key: '8',
                label: 'Inscribir Alumn@',
            },
        ],

    },
    {
        key: '3',
        icon: <TeamOutlined />,
        label: 'Profesores',
        children: [
            {
                key: '9',
                label: 'Crear Profesor/a',
            },
        ],

    },
    {
        key: '4',
        label: 'Abonos',
        icon: <DollarCircleOutlined />,
        children: [
            {
                key: '10',
                label: 'Cobrar Abono',
            },
        ],
    },
];

export default class menuPrincipal extends Component {

    render() {
        return ( <>
                <Title level={2}>Menú Principal</Title>

                <div
                    style={{
                        width: 46,
                    }}>

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
                        />
                    </div>
                </div>
            </>
        )
    }
}
