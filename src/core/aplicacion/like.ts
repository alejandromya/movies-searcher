export const sendLike = () => {
  fetch("https://movies-backend-biko2.vercel.app/api/like?token=7456", {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }
      return response.json(); // o .text() si no devuelve JSON
    })
    .then((data) => {
      console.log("Respuesta del servidor:", data);
    })
    .catch((error) => {
      console.error("Hubo un error:", error);
    });
};
