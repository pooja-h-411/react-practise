/*- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import { createRoot } from "react-dom/client";
import { Fragment } from "react";

function ReactFacts() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <header>
          <img
            src="/src/assets/react-logo.png"
            alt="Logo"
            width={"60px"}
            height={"60px"}
          />
        </header>
        <h1 style={{ padding: "5px" }}> React Facts</h1>
      </div>
      <ul>
        <li>Released in 2013</li>
        <li>Created by Jordan Walke</li>
        <li>Maintained by Meta</li>
      </ul>
      <footer>
        <small>© 2024 heal development. All rights reserved.</small>
      </footer>
    </>
  );
}

createRoot(document.querySelector("#root")).render(<ReactFacts />);
