import React, { Component } from 'react';

class NavBarTopo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cor: ""
        }
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark text-white">
                <a className="navbar-brand">TCC - 2019 Pytorch  x Tensorflow</a>
            </nav>
        )
    }
}

export default NavBarTopo;