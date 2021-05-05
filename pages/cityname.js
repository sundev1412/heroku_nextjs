import React from "react";
import cities from "../pages/api/cities.json";

export default (req, res) => {
  res.status(200).json(cities);
};
