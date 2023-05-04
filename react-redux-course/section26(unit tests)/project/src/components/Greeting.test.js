import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Dummy component if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const outputElement = screen.getByText(/Dummy component/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed if the button was clicked", () => {
    //Arragne
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText(/Changed/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render Dummy component if the button was clicked", () => {
    //Arragne
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText(/Dummy component/i);
    expect(outputElement).toBeNull();
  });
});
