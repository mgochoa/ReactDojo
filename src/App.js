import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.loadUsers();
        this.state = {users: []};
    }


    render() {
        console.log(this.state);
        return (<ul>{this.state.users.map(function (user, j) {
            return (<li key={user.id}>{user.name}</li>);
        })}
        </ul>);
    }

    loadUsers() {
        let _this = this;
        axios.get('http://jsonplaceholder.typicode.com/users').then(function (response) {
            console.log(response);
            _this.setState({
                users: response.data
            });
        }).catch(function (error) {
            console.error(error);
            return null;
        })
    }
}

export default App;
