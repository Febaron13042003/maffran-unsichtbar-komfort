import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Produkt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/angebote", { replace: true });
  }, [navigate]);

  return null;
};

export default Produkt;
