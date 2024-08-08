import React, { Component } from 'react'
import axios from 'axios'



export default class ClasesList extends Component {

  state = {
    clases: []
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4040/clases');
    // console.log(res);
    this.setState({ clases: res.data });
    // console.log(this.state.clases);
  }

  render() {
    return (
      // <div>Lista de Clases</div>
      <div className="row">
        <div className="col-md-4">
          form clase
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {
              this.state.clases.map( clase => <li className='list-group-item list-group-item-action' key={clase._id}>
                {clase.nombreClase}
              </li>

              )
            }
          </ul>
        </div>
      </div>

      
    )
  }
}
