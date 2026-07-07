export const LoginAPI = async (email, password) => {

    const body = {
    email: email,
    password: password,
  };
    try {
        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erro na requisição");
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        return data;

    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}