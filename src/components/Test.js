import React, { Component } from "react";

class Test extends Component {
    render() {
        return (
            <div>
                <a
                    href="#"
                    onClick={e => {
                        e.preventDefault();
                        this.props.atag();
                    }}
                >
                    atag
                </a>
            </div>
        );
    }
}

export default Test;
