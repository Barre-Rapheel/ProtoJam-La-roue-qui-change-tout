import express from "express";
import cors from "cors";

const app = express();
const serverPort = 3310;

app.use(cors());

const good_actions = [
	{ id: 1, citation: "Offrir un compliment à quelqu’un." },
	{ id: 2, citation: "Envoyer un message de remerciement à un proche." },
	{ id: 3, citation: "Acheter un café pour un collègue ou un inconnu." },
	{
		id: 4,
		citation:
			"Partager une ressource utile (un article, une vidéo inspirante).",
	},
	{ id: 5, citation: "Sourire à 5 personnes dans la journée." },
	{ id: 6, citation: "Planter une graine dans un pot ou un jardin." },
	{ id: 7, citation: "Offrir un repas à une personne sans-abri." },
	{ id: 8, citation: "Proposer de l'aide pour étudier à un(e) camarade." },
	{ id: 9, citation: "Rendre un objet trouvé à son propriétaire." },
	{ id: 10, citation: "Réparer ou recycler un objet au lieu de le jeter." },
	{ id: 11, citation: "Faire du bénévolat dans une maison de retraite." },
	{ id: 12, citation: "Aider un ami à déménager." },
	{
		id: 13,
		citation:
			"Prendre des nouvelles d'un proche que l'on n'a pas vu depuis longtemps.",
	},
	{
		id: 14,
		citation: "Dire je t'aime a ces parents le plus souvent possible.",
	},
	{
		id: 15,
		citation: "Donner des fournitures scolaires à une école qui en manque.",
	},
	{
		id: 16,
		citation:
			"Aider un collègue à s'intégrer dans un nouveau groupe de travail.",
	},
	{
		id: 17,
		citation: "Prendre soin d'animaux errants ou adopter un animal de refuge.",
	},
	{
		id: 18,
		citation:
			"Encourager un ami ou un proche à atteindre ses objectifs personnels ou professionnels.",
	},
	{
		id: 19,
		citation: "Écouter attentivement une personne qui a besoin de parler.",
	},
	{
		id: 20,
		citation:
			"Offrir un sourire à un inconnu dans la rue pour égayer sa journée.",
	},
	{
		id: 21,
		citation:
			"Passer du temps avec un ami ou un membre de la famille qui se sent seul.",
	},
	{
		id: 22,
		citation:
			"S'excuser sincèrement quand on fait une erreur, même si c’est difficile.",
	},
	{
		id: 23,
		citation:
			"Apporter son aide à une personne qui traverse une période difficile, comme une maladie ou une perte.",
	},
	{
		id: 24,
		citation:
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

app.listen(serverPort, (err) => {
	if (err) {
		console.error("Failed to start server:", err);
		process.exit(1);
	}
	console.info(`Listening on port ${serverPort}`);
});
