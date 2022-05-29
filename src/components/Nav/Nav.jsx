import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="nav">
      <input
        type="number"
        min="1"
        onChange={(e) => setId(e.target.value)}
        placeholder="Podaj ID produktu"
        className="nav__input"
      ></input>
      <Button
        disabled={!id}
        onClick={() => navigate(`/product/${id}`)}
        className="nav__btn"
      >
        Znajdź Produkt
      </Button>
    </div>
  );
};
export default Nav;
