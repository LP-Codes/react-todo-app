import React, { Component } from "react";
export default class Child extends Component {
    render() {
        return (
            <div>
                <h3>
                    I Am Child Component
                </h3>
                <h3>{this.props.Title}</h3>
            </div>
        );
    }
}