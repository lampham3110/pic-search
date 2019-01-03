import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
class App extends React.Component {
  state = {
    images: []
  };

  /*
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term
        },
        headers: {
          Authorization:
            "Client-ID d92dafe63b3a2b12cb5e18cb6e2635f09f11b67b6add3eaf15fe8a018b5ca2d9"
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
      */

  onSearchSubmit = async term => {
    const result = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({ images: result.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
