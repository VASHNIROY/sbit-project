import logo from "../../assets/sbitlogo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import "./loginpage.css";
import { Button } from "./StyledComponets";

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <img src={logo} />
      <div className="login-page-input-main-container">
        <div className="login-page-input-user-container">
          <div className="login-page-user-vl-container">
            <FaRegUserCircle className="input-icon" />
            <div className="verticalline"></div>
          </div>
          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Admin123"
              className="login-page-input-ele"
            />
          </div>
        </div>
        <div className="login-page-input-user-container">
          <div className="login-page-user-vl-container">
            <MdLockOutline className="input-icon" />

            <div className="verticalline"></div>
          </div>
          <div>
            <input
              type="text"
              placeholder="*********"
              className="login-page-input-ele"
            />
          </div>
        </div>
        <h5 style={{ textAlign: "center", color: "#FF0000" }}>
          Forgot Password ?
        </h5>
        <Button>
          Login <AiOutlineLogin style={{ fontSize: "20px" }} />
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
