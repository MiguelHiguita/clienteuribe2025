import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Formularios
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                {/* <Link class="nav-link active" aria-current="page" to="/"> */}
                <Link class="nav-link" aria-current="page" to="/">
                  Proveedor
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/logistica">
                  Logistica
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                {/* <a class="nav-link disabled" href=""> */}
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
