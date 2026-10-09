import RestaurantCard, { withNonVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("The Good Bowl");

  expect(name).toBeInTheDocument();
});

it("Should render Non-veg label on RestaurantCard", () => {
  const RestaurantCardPromoted = withNonVegLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const label = screen.getByText("Non-veg");

  expect(label).toBeInTheDocument();
});
