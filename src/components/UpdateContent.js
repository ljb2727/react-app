import React, { Component } from "react";

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        };
    }
    inputFormHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        console.log(this.props.data);
        return (
            <article>
                <h2>Update</h2>
                <form
                    action="/Update_process"
                    method="post"
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc
                        );
                    }}
                >
                    <input type="hidden" name="id" value={this.state.id} />
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={e => {
                                this.setState({
                                    title: e.target.value
                                });
                            }}
                        />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="content"
                            cols="30"
                            rows="10"
                            value={this.state.desc}
                            onChange={e => {
                                this.setState({
                                    desc: e.target.value
                                });
                            }}
                        ></textarea>
                    </p>
                    <input type="submit" value="submit" />
                </form>
            </article>
        );
    }
}
export default UpdateContent;
