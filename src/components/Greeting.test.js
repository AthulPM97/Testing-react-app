import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const greetingElement = screen.getByText("Hello world");
    expect(greetingElement).toBeInTheDocument();
  });
});
