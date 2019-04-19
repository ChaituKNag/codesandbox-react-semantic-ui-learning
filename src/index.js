import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Menu, Grid } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import "./styles.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const handleMenuClick = page => () => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      <Menu>
        <Menu.Item
          active={currentPage === "home"}
          onClick={handleMenuClick("home")}
        >
          Home
        </Menu.Item>
        <Menu.Item
          active={currentPage === "cards"}
          onClick={handleMenuClick("cards")}
        >
          Cards
        </Menu.Item>
        <Menu.Item
          active={currentPage === "others"}
          onClick={handleMenuClick("others")}
        >
          Others
        </Menu.Item>
      </Menu>

      {currentPage === "home" && (
        <Grid columns={1} padded>
          <Grid.Row>
            <Grid.Column textAlign="left">
              <p>This is the home page</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
      {currentPage === "cards" && (
        <Grid columns={1} padded>
          <Grid.Row>
            <Grid.Column textAlign="left">
              <p>This is the cards page</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
      {currentPage === "others" && (
        <Grid columns={1} padded>
          <Grid.Row>
            <Grid.Column textAlign="left">
              <p>This is the others page</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
