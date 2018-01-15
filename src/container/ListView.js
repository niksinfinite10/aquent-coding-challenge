import React from 'react';
import { getAllPizza } from '../api';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, pizzas: [], filterData: [] };
    this.sortData = this.sortData.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    getAllPizza()
      .then((data) => {
        this.setState({ pizzas: data.pizzas, isLoading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  sortData() {
    if (this.state.filterData.length>0) {
      this.setState({ filterData: this.state.filterData.sort().reverse() });
    } else {
      this.setState({ pizzas: this.state.pizzas.sort().reverse() });
    }
  }

  filterData(e) {
    const searchText = e.target.value;
    let result = this.state.pizzas
      .filter(word => word.toLowerCase().indexOf(searchText.toLowerCase()) > -1 );

    if (searchText.length>0 && result.length === 0) {
      result = ['no data found'];
    }
    this.setState({ filterData: result });
  }

  render() {
    const pizzas = this.state.filterData.length>0 ? this.state.filterData : this.state.pizzas;

    if (this.state.isLoading) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <div>
          <input type="text" onChange={this.filterData} />
          <button onClick={this.sortData}>sort</button>
        </div>
        <ul>
          { pizzas.map((rec, index) => <li key={index} >{rec}</li>)}
        </ul>
    </div>);
  }
}

export default ListView;
