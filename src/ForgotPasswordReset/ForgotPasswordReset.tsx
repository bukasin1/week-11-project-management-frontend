import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import "./ForgotPasswordReset.css";

function ForgotPasswordReset() {
  const { token }: any = useParams();

  const [passwordreset, setPasswordReset] = useState({
    newPassword: "",
    repeatPassword: "",
  });
  console.log(passwordreset);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://jaraaa.herokuapp.com/password/resetpassword/${token}`,
        passwordreset
      );
      setPasswordReset({ newPassword: "", repeatPassword: "" });
      console.log("i am a response", response.data);
    } catch (error: any) {
      console.log(error.response.data, "res error");
    }
  };

  const handleChange: any = (event: {
    target: { name: any; value: any };
  }): any => {
    setPasswordReset({
      ...passwordreset,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="ForgotPasswordReset_body">
      <div className="ForgotPasswordReset_container">
        <div className="ForgotPasswordReset_form">
          <form onSubmit={handleSubmit}>
            <div className="ForgotPasswordReset_form-row">
              <label className="ForgotPasswordReset_form-row-label">
                New Password
              </label>
              <br />
              <input
                type="password"
                name="newPassword"
                value={passwordreset.newPassword}
                onChange={handleChange}
                className="ForgotPasswordReset_form-row-input"
              />
            </div>
            <div className="ForgotPasswordReset_form-row">
              <label className="ForgotPasswordReset_form-row-label">
                Re-Enter New Password
              </label>
              <br />
              <input
                type="password"
                name="repeatPassword"
                onChange={handleChange}
                value={passwordreset.repeatPassword}
                className="ForgotPasswordReset_form-row-input"
              />
            </div>
            <button type="submit" className="ForgotPasswordReset_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordReset;
