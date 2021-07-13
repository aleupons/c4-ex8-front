import { useState } from "react";

export const Login = (props) => {
  const { setLogin } = props;
  const [error, setError] = useState(false);
  const [usuari, setUsuari] = useState("");
  const [contrassenya, setContrassenya] = useState("");

  const entrar = async (usuari, contrassenya) => {
    const credencials = { usuari, contrassenya };
    const resp = await fetch(
      "https://c4-ex8-back.herokuapp.com/usuaris/login",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credencials),
      }
    );
    if (resp.ok) {
      setError(false);
      const { token } = await resp.json();
      localStorage.setItem("token", token);
      localStorage.setItem("login", true);
      setLogin(true);
    } else {
      setError(true);
      setLogin(false);
    }
  };

  return (
    <section>
      <form>
        <label htmlFor="usuari">Nom d'usuari:</label>
        <div className="form-group">
          <input
            tpye="text"
            name="usuari"
            required
            value={usuari}
            onChange={(e) => setUsuari(e.target.value)}
          />
        </div>
        <label htmlFor="contrassenya">Contrassenya:</label>
        <div className="form-group">
          <input
            tpye="password"
            name="contrassenya"
            required
            value={contrassenya}
            onChange={(e) => setContrassenya(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            entrar(usuari, contrassenya);
          }}
        >
          Inicia sessió
        </button>
      </form>
      {error && <p>Error d'autentificació</p>}
    </section>
  );
};
