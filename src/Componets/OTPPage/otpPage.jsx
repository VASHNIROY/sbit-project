import logo from "../../assets/sbitlogo.png";
import { Button } from "../LoginPage/StyledComponets";

const OtpPage = () => {
  return (
    <div className="login-page-container">
      <img src={logo} />
      <p>To Reset the password</p>
      <p>Enter OTP is sent to the Administration Email ID</p>
      <Button>Verify</Button>
    </div>
  );
};

export default OtpPage;
