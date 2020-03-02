import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Test from "./components/Test";
import Control from "./components/control";

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;
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
            _desc,
            _article = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === "read") {
            var target = this.state.contents.filter(
                e => e.id === this.state.selected_content_id
            )[0];
            _title = target.title;
            _desc = target.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    onSubmit={(_title, _desc) => {
                        this.max_content_id++;
                        var _contents = this.state.contents.concat({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc
                        });
                        this.setState({
                            contents: _contents
                        });
                    }}
                ></CreateContent>
            );
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

                <Control
                    onChangeMode={_mode => {
                        this.setState({
                            mode: _mode
                        });
                    }}
                ></Control>
                {_article}
                <Test
                    atag={() => {
                        this.setState({
                            mode: "welcome"
                        });
                    }}
                ></Test>
            </div>
        );
    }
}

export default App;
