import React from "react";
import { render, screen } from "@testing-library/react";
import { FetchResultTitle } from "../FetchResultTitle";

describe("<FetchResultTitle />", () => {
  it("renders only 'No results' text when passed responseEmpty prop of value true", () => {
    render(<FetchResultTitle responseEmpty={true} fetchQuery="asdf" />);
    expect(screen.queryByText('No results for "asdf"')).toBeInTheDocument();
    expect(
      screen.queryByText('Showing users for "asdf"')
    ).not.toBeInTheDocument();
  });

  it("renders only 'Showing users...' text when passed responseEmpty prop of value false", () => {
    render(<FetchResultTitle responseEmpty={false} fetchQuery="fdsa" />);
    expect(screen.queryByText('Showing users for "fdsa"')).toBeInTheDocument();
    expect(screen.queryByText('No results for "fdsa"')).not.toBeInTheDocument();
  });
});
