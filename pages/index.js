import React from "react";
import HeadTag from "../components/Head";
import Link from "next/link";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeadTag />
        <Link href="/cats?category=2" as="/gatitos/2">
          <button>Espacio</button>
        </Link>

        <Link href="/cats?category=1" as="/gatitos/1">
          <button>Sombreros</button>
        </Link>

        <Link href="/cats?category=5" as="/gatitos/5">
          <button>Cajas</button>
        </Link>

        <style global jsx>{`
          html,
          body {
            font-family: Roboto;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
