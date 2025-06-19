import { render, screen } from "@testing-library/react";
import ProgrammingLanguagesList from "../../src/components/ProgrammingLanguagesList";

describe("Programing Languages List component", () => {
  it("should render a list of programming languages", () => {
    const languages = ["Javascript", "Java", "Golang"];
    render(<ProgrammingLanguagesList languages={languages} />);

    languages.forEach((language) => {
      expect(screen.getByText(language)).toBeInTheDocument();
    });
  });

  it("should render a message when list is empty", () => {
    render(<ProgrammingLanguagesList languages={[]} />);
    expect(screen.getByText(/No programming/i)).toBeInTheDocument();
  });
});
