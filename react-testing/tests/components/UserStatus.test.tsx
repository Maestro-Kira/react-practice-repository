import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus Component", () => {
  it("display a welcome message when an email is provided", () => {
    render(<UserStatus email="kira@gmail.com" />);
    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("display the sign up button when no email is provided", () => {
    render(<UserStatus email="" />);

    const signUpBtn = screen.getByText(/Sign Up/i);
    expect(signUpBtn).toBeInTheDocument();
  });
});
