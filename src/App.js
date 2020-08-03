import React, {Component} from 'react';

import './App.css';
import Navbar from "./components/Navbar";
import Table from "./components/Table"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }



    componentDidMount() {
        fetch("https://api.covid19india.org/data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.statewise
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }




    render() {



    return (
    <div className="App">


      <Navbar />
        <h3 className="grey-text text-darken-3 head">COVID-19 India Tracker</h3>
        <div className="container">
        <table className="striped bordered highlight z-depth-3 ">
            <thead className="z-depth-3 grey ">
            <tr>
                <th>STATE/UT</th>
                <th>CONFIRMED</th>
                <th>ACTIVE</th>
                <th>RECOVERED</th>
                <th>DECEASED</th>
            </tr>

            </thead>
            <tbody>
            {this.state.items.map((state) => <Table state={state}/>)}
            </tbody>

        </table> </div>
    </div>
  );
    }
}

export default App;
