export const CadastrarAPI = async (email, name, password) => {
  const body = {
    email,
    name,
    password,
  };

  try {
    const response = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao cadastrar");
    }

    const data = await response.json();

    return data;
  } 
  catch (error) {
    console.error(error.message);
    throw error;
  }
};
