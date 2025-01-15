import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  describe("Init render ~~~", () => {
    it("renders a logo", () => {
      render(<Home />);
      const ele = screen.getByTestId("logo-nextjs");
      expect(ele).toBeInTheDocument();
    });

    it("renders a deploy", () => {
      render(<Home />);
      const ele = screen.getByText(/Deploy now/i);
      expect(ele).toBeInTheDocument();
    });

    it("renders a read our docs", () => {
      render(<Home />);
      const ele = screen.getByText(/Read our docs/i);
      expect(ele).toBeInTheDocument();
    });

    it("renders the correct link", () => {
      render(<Home />);

      // Find the link element
      const link = screen.getByText(/Deploy now/i);

      // Assert the href attribute
      expect(link).toHaveAttribute(
        "href",
        "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      );
    });
  });
});
