import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  //   screen.debug();
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText('Profile')
  expect(profileAvatar).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );

    const signOutLink = await screen.findByRole('link', {name: 'Sign out'})
    fireEvent.click(signOutLink)
    const SignInLink = await screen.findByRole("link", { name: "Sign in" });
    const SignUpLink = await screen.findByRole("link", { name: "Sign up" });
    expect(SignInLink).toBeInTheDocument();
    expect(SignUpLink).toBeInTheDocument();
  });
  