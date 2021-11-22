import React from "react";
const { ipcRenderer } = require("electron");
export default function App() {
  return (
    <>
      <h1>Test Header</h1>
      <button
        onClick={() => {
          ipcRenderer.send("notify", "Custom Notification!");
        }}
      >
        Hey!
      </button>
    </>
  );
}
