import imageBackgroud from '../images/image_backgroud.png';
import check from '../images/check.png';
import Topbar from "../components/TopBar";
import InputText from "../components/InputText";
import PrimaryButton from "../components/PrimaryButton";

import '../styles/pages/login.css';

function Login() {
  return (
    <div id="pageLogin">
      <Topbar />
      <div className="contentLoginPage">
        <div className="contentWrapper">
          <img id="imageBackgroud" src={imageBackgroud} alt="Background"/>
          <main id="containerLoginText">
            <div className="sloganLabel">
              <h1>Evoluindo o seu modo de fazer chamada</h1>
            </div>
            <div className="versatileLabel">
              <h3>Versátil</h3>
              <img src={check} alt="Background"/>
            </div>
            <div className="fastLabel">
              <h3>Rápido</h3>
              <img src={check} alt="Background"/>
            </div>
            <div className="accessibleLabel">
              <h3>Acessível</h3>
              <img src={check} alt="Background"/>
            </div>
          </main>
        </div>

        <div id="sidebar">
          <div className="loginLabel">
            <h1>LOGIN</h1>
          </div>
          <div className="emailContainer">
            <h3>E-mail</h3>
            <InputText id="inputEmail" placeholder="Insira o seu email"/>
          </div>
          <div className="passwordContainer">
            <h3>Senha</h3>
            <InputText id="inputPassword" type="password" placeholder="Insira a sua senha"/>
          </div>
          <div className="resetPasswordContainer">
            <a href="" id="resetPassword">Recuperar senha</a>
            <i></i>
          </div>
          <div className="loginButton">
            <PrimaryButton type="button" id="loginButton">Login</PrimaryButton>
          </div>
          <div className="newRegisterButton">
            <PrimaryButton type="button" id="newRegister">
              Novo Aqui?
              <br></br>
              Crie sua conta
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
