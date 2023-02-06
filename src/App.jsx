import { NavLink, Outlet } from "react-router-dom";

localStorage.setItem("notes", JSON.stringify([]));

function App() {
  return (
    <div className="vh-100 p-3 p-md-4 d-flex">
      <div className="card flex-row flex-grow-1">
        <div className="card-header">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i class="bi bi-list-ol"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                end
                to="/add"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i class="bi bi-plus-circle-fill"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body flex-grow-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
