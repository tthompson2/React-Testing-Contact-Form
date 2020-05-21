import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

xtest("renders first name section of form succcessfully", () => {


  // Arrange

  const { getByText } = render(<ContactForm/>);

  // Act

  // Assert
  const greeting = getByText(/first name/i);
});

xtest("renders last name section of form successfully,", () => {
  // Arrange

  
  const {getByText} = render(<ContactForm/>);

  // 
  const greeting = getByText(/last name/i);
});

xtest("renders email section of form successfully", () => {

  // Arrange

  const {getByText} = render(<ContactForm/>);

  // Act

  const greeting = getByText(/email/i);
});

xtest("renders message section of form successfully,", () => {

  // Arrange 

   const {getByText} = render(<ContactForm/>);

   // Act

   const greeting = getByText(/message/i);
});
