import React, { Component } from 'react';
// import { Menu } from "antd";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: 'Socios',
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: 'Clases',
    },
    {
        key: '3',
        icon: <ContainerOutlined />,
        label: 'Profesores',
    },
    {
        key: 'sub1',
        label: 'Abonos',
        icon: <AppstoreOutlined />,
        children: [
            {
                key: '5',
                label: 'Cobrar Abono',
            },
            {
                key: '6',
                label: 'Clases',
            },
            {
                key: '7',
                label: 'Abonos',
            },
            // {
            //     key: '8',
            //     label: 'Option 8',
            // },
        ],
    },
];

// const [collapsed, setCollapsed] = useState(false);

// const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
// };

export default class menuPrincipal extends Component {

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        return (
            //     <>
            //   <div>MENU PRINCIPAL</div>        
            //     </>
            <>
                <div
                    style={{
                        width: 46,
                    }}>
                    <div
                        style={{
                            width: 46,
                        }}
                    >
                        <Button
                            type="primary"
                            onClick={this.toggleCollapsed}
                            style={{
                                // marginBottom: 16,
                                marginBottom: 0,
                            }}
                        >
                            {/* {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
                            {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>

                    </div>
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
                            inlineCollapsed={this.state.collapsed}
                            items={items}
                        />
                    </div>
                </div>
            </>
        )
    }
}
