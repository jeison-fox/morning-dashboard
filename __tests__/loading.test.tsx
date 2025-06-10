import { render, screen } from "@testing-library/react";
import Loading from "@/app/loading";

describe("Loading skeleton", () => {
  it("renders the main skeleton layout", () => {
    render(<Loading />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThanOrEqual(3);
  });
});
