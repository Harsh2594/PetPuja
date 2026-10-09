import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should return the body component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchBtn);
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  //write something inside input box---onChangeEvent
  const searchInput = screen.getByTestId("searchInput");
  //type something inside it
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  //hit search
  fireEvent.click(searchBtn);
  //search should load 4 cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(filterBtn);
  const cardsBeforefilter = screen.getAllByTestId("resCard");
  expect(cardsBeforefilter.length).toBe(10);
});
