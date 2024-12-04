// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

// Get the port from the environment variables
const port = process.env.APP_PORT;
const good_actions = [
	{ id: 1, action: "Faire un compliment à un inconnu." },
	{ id: 2, action: "Envoyer un message de remerciement à un proche." },
	{ id: 3, action: "Acheter un café pour un collègue ou un inconnu." },
	{
		id: 4,
		action: "Partager une ressource utile (un article, une vidéo inspirante).",
	},
	{ id: 5, action: "Sourire à 5 personnes dans la journée." },
	{ id: 6, action: "Planter une graine dans un pot ou un jardin." },
	{ id: 7, action: "Offrir un repas à une personne sans-abri." },
	{ id: 8, action: "Proposer de l'aide pour étudier à un(e) camarade." },
	{ id: 9, action: "Rendre un objet trouvé à son propriétaire." },
	{ id: 10, action: "Réparer ou recycler un objet au lieu de le jeter." },
	{ id: 11, action: "Faire du bénévolat dans une maison de retraite." },
	{ id: 12, action: "Aider un ami à déménager." },
	{
		id: 13,
		action:
			"Prendre des nouvelles d'un proche que l'on n'a pas vu depuis longtemps.",
	},
	{
		id: 14,
		action: "Dire je t'aime a ses proches le plus souvent possible.",
	},
	{
		id: 15,
		action: "Donner des fournitures scolaires à une école qui en manque.",
	},
	{
		id: 16,
		action: "Aider un collègue à s'intégrer dans un nouveau groupe de travail.",
	},
	{
		id: 17,
		action: "Prendre soin d'animaux errants ou adopter un animal de refuge.",
	},
	{
		id: 18,
		action:
			"Encourager un ami ou un proche à atteindre ses objectifs personnels ou professionnels.",
	},
	{
		id: 19,
		action: "Écouter attentivement une personne qui a besoin de parler.",
	},
	{
		id: 20,
		action:
			"Offrir un sourire à un inconnu dans la rue pour égayer sa journée.",
	},
	{
		id: 21,
		action:
			"Passer du temps avec un ami ou un membre de la famille qui se sent seul.",
	},
	{
		id: 22,
		action:
			"S'excuser sincèrement quand on fait une erreur, même si c’est difficile.",
	},
	{
		id: 23,
		action:
			"Apporter son aide à une personne qui traverse une période difficile, comme une maladie ou une perte.",
	},
	{
		id: 24,
		action:
			"Prendre soin de soi en faisant des activités qui favorisent son bien-être mental et émotionnel.",
	},
];

app.get("/good_actions", (req, res) => {
	res.json(good_actions);
});

app.get("/good_actions/:id", (req, res) => {
	const wantedId = Number.parseInt(req.params.id);
	if (Number.isNaN(wantedId)) {
		return res.sendStatus(400);
	}
	const good_action = good_actions.find(
		(good_action) => good_action.id === wantedId,
	);
	if (good_action !== undefined) {
		res.json(good_action);
	} else {
		res.sendStatus(404);
	}
});
// Start the server and listen on the specified port
app
	.listen(port, () => {
		console.info(`Server is listening on port ${port}`);
	})
	.on("error", (err: Error) => {
		console.error("Error:", err.message);
	});
