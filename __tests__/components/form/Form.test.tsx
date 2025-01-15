import Form from "@/components/form";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Form Page ~~~", () => {
  describe("render", () => {
    it("renders a full name", () => {
      render(<Form />);
      const ele = screen.getByTestId("full-name");
      expect(ele).toBeInTheDocument();
    });

    it("renders a password", () => {
      render(<Form />);
      const ele = screen.getByTestId("password");
      expect(ele).toBeInTheDocument();
    });
  });

  describe("input handling", () => {
    it("should update the full name input value when typed", () => {
      render(<Form />);
      const ele = screen.getByTestId("full-name");
      fireEvent.change(ele, { target: { value: "John Smith" } });
      expect(ele).toHaveValue("John Smith");
    });

    it("should update the password input value when typed", () => {
      render(<Form />);
      const ele = screen.getByTestId("password");
      fireEvent.change(ele, { target: { value: "password123" } });
      expect(ele).toHaveValue("password123");
    });

    it("should not submit the form if full name is empty", () => {
      render(<Form />);
      const ele = screen.getByTestId("submit");
      fireEvent.click(ele);
      expect(screen.queryByText(/Sign Up/i)).not.toBeNull();
    });

    it("should not submit the form if password is empty", () => {
      render(<Form />);
      const ele = screen.getByTestId("submit");
      fireEvent.click(ele);
      expect(screen.queryByText(/Sign Up/i)).not.toBeNull();
    });

    it("should submit the form if full name and password are not empty and show wording thank you", () => {
      render(<Form />);
      const fullName = screen.getByTestId("full-name");
      const password = screen.getByTestId("password");
      fireEvent.change(fullName, { target: { value: "John Smith" } });
      fireEvent.change(password, { target: { value: "password123" } });
      const ele = screen.getByTestId("submit");
      fireEvent.click(ele);
      expect(screen.queryByText(/Sign Up/i)).toBeNull();
      expect(screen.findByText(/Thank you/i)).not.toBeNull();
    });
  });
});
