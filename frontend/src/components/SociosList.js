import React, { Component } from 'react'
import axios from 'axios';
import { Button, Space, Table } from 'antd';
// import { Link } from 'react-router-dom';


// const MyComponent = () => {
//   const handleClick = () => {
//     // Aquí defines lo que ocurre cuando se hace clic en el botón
//     console.log('Botón clickeado');
//   };
// }
  const handleClick = () => {
    // Aquí defines lo que ocurre cuando se hace clic en el botón
    console.log('Botón clickeado');
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
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: 'Fecha Nacimiento',
    dataIndex: 'fecNac',
    key: 'fecNac',
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
      <Space size="middle">
        <Button onClick={handleClick}>Modificar</Button>
        <Button onClick={handleClick}>Eliminar</Button>
      </Space>
    ),
  },
];

//llama a los datos de los socios en bbdd
// const data = [
//   {
//     key: '1',
//     nombre: 'John',
//     apellido: 'Brown',
//     dni: '12345678',
//     tel: '114123456',
//     fecNac: '23/10/1993',
//     clase: 'Yoga',
//     abono: 'asd'
//   },
//   {
//     key: '2',
//     nombre: 'Tuvie',
//     apellido: 'jaentanga',
//     dni: '55667788',
//     tel: '112345678',
//     fecNac: '13/11/1990',
//     clase: 'fulbo',
//     abono: 'asd'
//   }
// ];


export default class SociosList extends Component {

    // handleClick = () => {
    //   // Aquí defines lo que ocurre cuando se hace clic en el botón
    //   console.log('Botón clickeado');
    // };

  // constructor(props) {
  //   super(props);
  //   // Si vas a acceder a 'this' en la función, necesitarás hacer el binding (si no usas arrow functions)
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   // Aquí defines lo que ocurre cuando se hace clic en el botón
  //   console.log('Botón clickeado');
  // }

  state = {
    socios: []
  }

  async componentDidMount() {
    try {

      const res = await axios.get('http://localhost:4040/socios');
      // console.log(res);
      const socios = res.data.map(socio => ({
        key: socio._id,
        nombre: socio.nombre,
        apellido: socio.apellido,
        dni: socio.dni,
        tel: socio.telefono,
        fecNac: socio.fechaNac,
        // clase: socio.clase,
        // abono: socio.abono
      }));
      // this.setState({ socios: res.data });
      console.log(this.state.socios);
      this.setState({ socios });
    }

    catch (error) {
      console.error("Error fetching socios:", error);
    }
  }

  render() {
    return (
      <>
        <div>Lista de Socios / DATOS PERSONALES</div>
        <Table columns={columns} dataSource={this.state.socios} />
      </>
    )
  }
}
