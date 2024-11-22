import { render, screen } from "@testing-library/react";
import   "@testing-library/jest-dom" 
import Users from "./Users";

describe("User", () => {
  test("renders heading", async () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users List" })).toBeInTheDocument();
  });
  
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(4);
  });
});  

