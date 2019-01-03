import React from "react";

class SearchBar extends React.Component {
  /*Handle input change */
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault(); /*Prevent automatically submit the form */
    this.props.onSubmit(this.state.term); /*Use this for class component */
  };
  render() {
    return (
      <div className="ui segment">
        {/*Handle form submit with Enter key*/}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
