import React from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.PreventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton> 
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign in with google{" "}
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
