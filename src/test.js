import React, { Component } from "react"
import Subject from "./components/Test"
import Content from "./components/Content"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            subject: {title: "w", sub: "ww"},
            welcome: {title: "welcome", desc: "welcome desc"},
            contents: [
                {id:1, title: "a1"}
            ]
        }
    }
    render() {
        var _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read'){
            _title = this.state.subject.title;
            _desc = this.state.subject.desc;
        }
        return (
            <Content title={_title} desc={_desc}></Content>
        )
    }
}