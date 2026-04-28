import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h3 className="text-danger">ERROR</h3>
      <h1>NOT FOUND</h1>
      <Link to="/login" className="text-decoration-none"> <h3>Retornar para a página inicial</h3></Link>     
    </div>
  );
}

