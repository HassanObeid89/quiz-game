import { render } from "@testing-library/react";

import WelcomeScreen from "./WelcomeScreen";

describe("WelcomeScreen component", () => {
  it("Welcome screen should have Start Game button", () => {
    const { getByTestId } = render(<WelcomeScreen />);
    const buttonElement = getByTestId("startGame");
    expect(buttonElement).toBeTruthy();
  });
});
