import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={e => {
                        e.preventDefault();
                        if (
                            e.target.title.value === "" ||
                            e.target.desc.value === ""
                        ) {
                            alert("empty");
                            return false;
                        }
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                        e.target.title.value = "";
                        e.target.desc.value = "";
                    }}
                >
                    <p>
                        <input type="text" name="title" placeholder="title" />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="content"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </p>
                    <input type="submit" value="submit" />
                </form>
            </article>
        );
    }
}
export default CreateContent;
