import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hero heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /calm clarity/i });
  expect(heading).toBeInTheDocument();
});
