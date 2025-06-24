import { render, screen } from "@testing-library/react";
import { describe, it, expect, test } from "vitest";
import { App } from "../App";
import userEvent from "@testing-library/user-event";

describe("App Component", () => {
  it("displays the subtitle", () => {
    render(<App />);
    const subtitle = screen.getByText(/Encuentra tu película favorita/i);
    expect(subtitle).toBeInTheDocument();
  });

  it("displays the film Lawrence of Arabia", async () => {
    render(<App />);

    const textbox = await screen.findByRole("textbox");
    const textToSearch = "arab";
    await userEvent.type(textbox, textToSearch.toLowerCase());
    const filmToFind = "Lawrence of Arabia";
    const title = screen.getByText(filmToFind);
    expect(title).toBeInTheDocument();
  });
});
