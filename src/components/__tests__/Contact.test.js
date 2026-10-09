import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us Page Test Cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  test("Should load Contact us component", () => {
    render(<Contact />); //render on jsdom
    const heading = screen.getByRole("heading", {
      name: "Contact Us",
    });
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should render contact support button", () => {
    render(<Contact />);
    expect(
      screen.getByRole("button", {
        name: "Contact Support",
      }),
    ).toBeInTheDocument();
  });
});
