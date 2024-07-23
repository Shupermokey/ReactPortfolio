import React, { Component } from "react";

export function BootCamp({ name, summary, technology }) {
  return (
    <div className="camp">
      <div className="camp-name">{name}</div>
      <div className="camp-sum">{summary}</div>
      <div className="camp-tech">{technology}</div>
    </div>
  );
}

export default BootCamp;
