import React from "react";
export default function App() {
  return (
    <>
      <h1>Test Header</h1>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification("Custom Notification!");
        }}
      >
        Hey!
      </button>
    </>
  );
}
