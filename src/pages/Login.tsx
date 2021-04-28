import React from 'react';

// import '../styles/pages/landing.css';

function Login() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>São Francisco do Sul</strong>
          <span>Santa Catarina</span>
        </div>
        {/* <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link> */}
      </div>
    </div>
  );
}

export default Login;