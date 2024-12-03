export const goodActionsFetch = () => {
	return fetch("http://localhost:3310/good_actions")
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
