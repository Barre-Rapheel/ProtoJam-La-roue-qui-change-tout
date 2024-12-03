export const quotesZenFetch = () => {
  return fetch("https://zenquotes.io/api/quotes?lang=fr")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement");
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
