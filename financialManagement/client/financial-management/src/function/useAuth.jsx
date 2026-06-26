import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      navigate("/login");
      
    }

    fetch("http://localhost:3000/auth/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Token inválido");
        return res.json();
      })
      .then((data) => {
        console.log("Usuário validado:", data);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);
    
};