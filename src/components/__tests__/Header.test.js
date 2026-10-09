import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", {
    name: "Login",
  });

  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with a Cartitem 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = screen.getByText("Cart(0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render navigation links", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();

  expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();

  expect(screen.getByRole("link", { name: "Contact Us" })).toBeInTheDocument();
});

it("Should render Grocery link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const groceryLink = screen.getByRole("link", {
    name: "Grocery",
  });

  expect(groceryLink).toBeInTheDocument();
  expect(groceryLink).toHaveAttribute("href", "/grocery");
});

it("Should change Login button to Logout when clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", {
    name: "Login",
  });

  fireEvent.click(loginButton);

  expect(
    screen.getByRole("button", {
      name: "Logout",
    }),
  ).toBeInTheDocument();
});
