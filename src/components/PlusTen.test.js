import { render, fireEvent } from "@testing-library/react";
import PlusTen from "./PlusTen";

describe("PlusTen component", () => {
  it("Should call the addTenSec function", () => {
    const { getByTestId } = render(<PlusTen />);
    const button = getByTestId("plusTen");
    expect(button).toBeTruthy();
  });
});
