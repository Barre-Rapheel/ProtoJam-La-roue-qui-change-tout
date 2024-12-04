export const goodActionsFetch = (id: number) => {
  const url = `http://localhost:3310/good_actions/${id}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error loading");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Erreur", error);
      throw error;
    });
};
