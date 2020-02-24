import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Test from "./components/Test";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "welcome",
            selected_content_id: 1,
            subject: { title: "w", sub: "woww" },
            welcome: { title: "welcome", desc: "welcome desc" },
            contents: [
                { id: 1, title: "a1", desc: "aa" },
                { id: 2, title: "a2", desc: "bb" },
                { id: 3, title: "a3", desc: "cc" }
            ]
        };
    }
    render() {
        var _title,
            _desc = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            // var i = 0;
            // while (i < this.state.contents.length) {
            //     var data = this.state.contents[i];
            //     if (data.id === this.state.selected_content_id) {
            //         _title = data.title;
            //         _desc = data.desc;
            //         break;
            //     }
            //     i++;
            // }
            var target = this.state.contents.filter(
                e => e.id == this.state.selected_content_id
            )[0];
            _title = target.title;
            _desc = target.desc;
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={() => {
                        this.setState({
                            mode: "welcome"
                        });
                    }}
                ></Subject>

                <TOC
                    onChangePage={id => {
                        this.setState({
                            mode: "read",
                            selected_content_id: Number(id)
                        });
                    }}
                    data={this.state.contents}
                ></TOC>
                <Content title={_title} desc={_desc}></Content>
                <Test title={this.state.mode}></Test>
            </div>
        );
    }
}

export default App;
