export const Login = () => {
  return (
    <form>
      <label htmlFor="usuari">Nom d'usuari:</label>
      <div className="form-group">
        <input tpye="text" name="usuari" required />
      </div>
      <label htmlFor="contrassenya">Contrassenya:</label>
      <div className="form-group">
        <input tpye="password" name="contrassenya" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Inicia sessió
      </button>
    </form>
  );
};
