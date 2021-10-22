import "./ForgotPasswordEmail.css";
import { useState } from "react";
import axios from "axios";

function ForgotPasswordEmail() {
  const [emailValue, setEmail] = useState({ email: "" });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jaraaa.herokuapp.com/password/forgetpassword",
        emailValue
      );
      setEmail({ email: "" });
      console.log("i am a response", response.data);
    } catch (error: any) {
      console.log(error.response.data, "res error");
    }
  };

  const handleChange: any = (event: {
    target: { name: any; value: any };
  }): any => {
    setEmail({
      ...emailValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="ForgotPasswordEmail_body">
      <div className="ForgotPasswordEmail_container">
        <div className="ForgotPasswordEmail_form">
          <form onSubmit={handleSubmit}>
            <div className="ForgotPasswordEmail_form-row">
              <label className="ForgotPasswordEmail_form-row-label">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                value={emailValue.email}
                onChange={handleChange}
                className="ForgotPasswordEmail_form-row-input"
              />
            </div>
            <button type="submit" className="ForgotPasswordEmail_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;
