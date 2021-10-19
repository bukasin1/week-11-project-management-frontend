import React from 'react';
import { render, screen, } from '@testing-library/react';
import App from './App';
import SignUp from './Signup/signUp';
import { MemoryRouter } from "react-router-dom";
import Form from "./ChangePassword/Password"
import FormLogin from "./ChangePassword/changeLogin"

// test('For registeration', () => {
//   render(<SignUp/>);
//   const testIdName = "but";

//   const {getByTestId} = render(<App />);

//   const foundButton = getByTestId(testIdName);

//   expect(foundButton).toBeTruthy();
// });


// describe("Login", () => {
//   test("Test for the Login Button", async () => {
//     render(
//       <MemoryRouter>
//         <FormLogin />
//       </MemoryRouter>
//     );
//     const button = await screen.getByRole("button", { name: "Sign In" });
//     expect(button).toBeInTheDocument();
//   });
//   test("Test for the Google Button", async () => {
//     render(
//       <MemoryRouter>
//         <Login />
//       </MemoryRouter>
//     );
//     const Googlebutton = await screen.getByRole("button", {
//       name: "Use Google Account",
//     });
//     expect(Googlebutton).toBeInTheDocument();
//   });
//   test("Test for the Facebook Button", async () => {
//     render(
//       <MemoryRouter>
//         <Login />
//       </MemoryRouter>
//     );
//     const Facebookbutton = await screen.getByRole("button", {
//       name: "Use Facebook Account",
//     });
//     expect(Facebookbutton).toBeInTheDocument();
//   });
//   test("Test for Email text", async () => {
//     render(
//       <MemoryRouter>
//         <Login />
//       </MemoryRouter>
//     );
//     expect(screen.getByText("Email Address")).toBeInTheDocument();
//   });
// });