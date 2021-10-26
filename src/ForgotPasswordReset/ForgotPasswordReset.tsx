import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import "./ForgotPasswordReset.css";
import { Link } from "react-router-dom";

function ForgotPasswordReset() {
  const { token }: any = useParams();

  const [passwordreset, setPasswordReset] = useState({
    newPassword: "",
    repeatPassword: "",
  });

  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://jaraaa.herokuapp.com/password/resetpassword/${token}`,
        passwordreset
      );
      setPasswordReset({ newPassword: "", repeatPassword: "" });
      console.log("i am a response", response.data);
      setsuccessMessage(true);
      console.log(successMessage);
    } catch (error: any) {
      console.log(error.response.data, "res error");
      seterrorMessage(error.response.data.message);
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
                minLength={6}
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
                minLength={6}
                onChange={handleChange}
                value={passwordreset.repeatPassword}
                className="ForgotPasswordReset_form-row-input"
              />
            </div>
            {errorMessage && <p style={{ color: "Red" }}>{errorMessage}</p>}
            {successMessage && (
              <p style={{ color: "black" }}>
                {" "}
                Password has been successfully reset. Click this{" "}
                <Link to={"/login"}>link</Link> to login
              </p>
            )}
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
