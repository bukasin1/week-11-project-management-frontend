import "./ForgotPasswordEmail.css";
import { useState } from "react";
import axios from "axios";

function ForgotPasswordEmail() {
  const [emailValue, setEmail] = useState<{ email: string; message?: string }>({
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jaraaa.herokuapp.com/password/forgetpassword",
        emailValue
      );
      setEmail({ email: "" });
      console.log("i am a response", response.data);
      setMessage(response.data.message as string);
    } catch (error: any) {
      console.log(error.response.data, "res error");
      setMessage(error.response.data.message);
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
                minLength={6}
                value={emailValue.email}
                onChange={handleChange}
                className="ForgotPasswordEmail_form-row-input"
              />
            </div>
            {message && <p style={{ color: "red" }}>{message}</p>}
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
