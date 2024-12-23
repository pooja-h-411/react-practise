import { createRoot } from "react-dom/client";

function MyHeader() {
  return (
    <div style={{ color: "white" }}>
      <h1> Welcome!!</h1>
      <h2> React .</h2>
    </div>
  );
}

function MyFooter() {
  return (
    <div>
      <h5>This is a footer</h5>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <div>
    <MyHeader />
    <MyFooter />
  </div>
);
