// PART 8 CallingBackendServices

import React, { Component } from "react";

import axios from "axios";

class App2 extends Component {
  state = { posts: [] };
  EndPoint = "https://jsonplaceholder.typicode.com/posts";
  async componentDidMount() {
    const { data: posts } = await axios.get(this.EndPoint);
    this.setState({ posts });
  }

  HandleAdd = async () => {
    const ob = { title: "a", body: "BB" };
    const { data: post } = await axios.post(this.EndPoint, ob);
    this.setState({ posts: [...this.state.posts, post] });
  };

  HandleUpdate = async (post) => {
    post.title = "NEW-NHE";
    const res = await axios.put(this.EndPoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const ind = posts.indexOf(post);
    posts[ind] = post;
    this.setState({ posts });
  };
  HandleDelete = async (post) => {
    const originPosts = [...this.state.posts];
    this.setState({ posts: this.state.posts.filter((p) => p.id != post.id) });

    try {
      await axios.delete(this.EndPoint + "/" + post.id);
      throw new Error("");
    } catch (error) {
      alert("ERR");
      this.setState({ posts: originPosts });
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1>PART 8 CallingBackendServices</h1>
        <button className="btn btn-primary" onClick={this.HandleAdd}>
          Add
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.HandleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.HandleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App2;
