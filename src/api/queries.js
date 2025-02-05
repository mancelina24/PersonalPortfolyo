import React from "react";

export const queries = async () => {
  const response = await fetch("https://reqres.in/api/workintech");
  if (!response.ok) {
    throw new Error("Veri çekilemedi");
  }
  return response.json();
};
