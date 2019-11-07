import React from "react";
import axios from "axios";

class Cats extends React.Component {
  static async getInitialProps({ req, query }) {
    const id = req ? req.params.id : query.category;

    const getCatImage = await axios.get(
      `https://api.thecatapi.com/v1/images/search?category_ids=${id}`
    );

    return {
      img: getCatImage.data[0].url
    };
  }

  render() {
    return <img src={this.props.img} />;
  }
}

export default Cats;
