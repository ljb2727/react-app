import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/control";

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode: "welcome",
            selected_content_id: 1,
            subject: { title: "title", sub: "sub" },
            welcome: { title: "wel", desc: "dese" },
            contents: [
                { id: 1, title: "a1", desc: "aa" },
                { id: 2, title: "a2", desc: "bb" },
                { id: 3, title: "a3", desc: "cc" }
            ]
        };
    }
    getReadContent() {
        var target = this.state.contents.filter(
            e => e.id === this.state.selected_content_id
        )[0];
        return target;
    }
    getContent() {
        var _title,
            _desc,
            _article = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === "read") {
            var _content = this.getReadContent();
            _article = (
                <ReadContent
                    title={_content.title}
                    desc={_content.desc}
                ></ReadContent>
            );
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    onSubmit={(_title, _desc) => {
                        this.max_content_id++;
                        // var _contents = this.state.contents.concat({
                        //     id: this.max_content_id,
                        //     title: _title,
                        //     desc: _desc
                        // });
                        var _contents = Array.from(this.state.contents);
                        _contents.push({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc
                        });
                        this.setState({
                            contents: _contents,
                            mode: "read",
                            selected_content_id: this.max_content_id
                        });
                    }}
                ></CreateContent>
            );
        } else if (this.state.mode === "update") {
            _content = this.getReadContent();
            _article = (
                <UpdateContent
                    data={_content}
                    onSubmit={(_id, _title, _desc) => {
                        var _contents = Array.from(this.state.contents);
                        _contents.find((e, i) => {
                            if (e.id === _id) {
                                _contents[i] = {
                                    id: _id,
                                    title: _title,
                                    desc: _desc
                                };
                            }
                        });
                        this.setState({
                            contents: _contents,
                            mode: "read"
                        });
                    }}
                ></UpdateContent>
            );
        }
        return _article;
    }

    render() {
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
                        if (_mode === "delete") {
                            var _contents = Array.from(this.state.contents);
                            var i = 0;
                            while (i < _contents.length) {
                                console.log(this.state.selected_content_id);
                                if (
                                    _contents[i].id ==
                                    this.state.selected_content_id
                                ) {
                                    _contents.splice(i, 1);
                                    break;
                                }
                                i = i + 1;
                            }
                            console.log(_contents);
                            this.setState({
                                mode: "welcome",
                                contents: _contents
                            });
                        } else {
                            this.setState({
                                mode: _mode
                            });
                        }
                    }}
                ></Control>
                {this.getContent()}
            </div>
        );
    }
}
export default App;
