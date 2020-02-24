import React, { Component } from "react";

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        // var i = 0;
        // while (i < data.length) {
        // lists.push(<li key={data[i].id}><a href={"/component/"+data[i].id}>{data[i].desc}</a></li>)
        //   i++;
        // }
        for (var item of data) {
            lists.push(
                <li key={item.id}>
                    <a
                        href={"/component/" + item.id}
                        data-id={item.id}
                        onClick={e => {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }}
                    >
                        {item.desc}
                    </a>
                </li>
            );
        }

        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}
export default TOC;
