import React, { Component } from 'react'
import axios from 'axios'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card,Typography,Col, Divider, Row  } from 'antd';
const { Meta } = Card;
const { Title } = Typography;
export default class ClasesList extends Component {

  state = {
    clases: []
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4040/clases');
    // console.log(res);
    const clases = res.data.map(clase => ({
      ...clase,
      key: clase._id,
    }));
    this.setState({ clases });    // this.setState({ clases: res.data });
    // console.log(this.state.clases);
  }

  render() {
    return (
      <>
        {/* <div>Lista de Clases</div> */}
        <Title level={2}>Lista de Clases</Title>
        <Divider orientation="left"></Divider>
        <Row justify="space-evenly">
        {/* <div className="row">  */}
        
          {/* <div className="col-md-4"> */}
            {/* form clase */}
          {/* </div> */}
          {/* <div className="col-md-8"> */}
            {/* <ul className="list-group"> */}

              {/* {this.state.clases.map(
                clase => <li className='list-group-item list-group-item-action' key={clase._id}>
                {clase.nombreClase}
              </li> )
              } */}

              {
                this.state.clases.map(
                  clase =><Col span={4}>
                    <Card
                      style={{
                        width: 300
                      }}
                      cover={
                        <img
                          alt="example"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                      }
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                      key={clase._id}
                    >
                      <Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                        title={clase.nombreClase}
                        description={clase.instructor}
                      />
                    </Card>
                    </Col>
                )
              }
            {/* </ul> */}
          {/* </div> */}
        {/* </div> */}
        </Row>

      </>
    );
  }
}
