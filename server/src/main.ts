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
	{ id: 1, action: "Compliment someone." },
	{ id: 2, action: "Send thanks to a relative." },
	{ id: 3, action: "Buy a coffee for a colleague or a stranger" },
	{
		id: 4,
		action: "Share a useful resource (an article, an inspiring video).",
	},
	{ id: 5, action: "Smile at 5 people during the day." },
	{ id: 6, action: "Plant a seed in a pot or garden." },
	{ id: 7, action: "Give a meal for a homeless person" },
	{ id: 8, action: "Offer study help to a classmate." },
	{ id: 9, action: "Give back a lost item to its owner." },
	{
		id: 10,
		action: "Repair or recycle an item instead of throwing it away.",
	},
	{ id: 11, action: "Volunteer at a retirement home." },
	{ id: 12, action: "Help a friend move house." },
	{
		id: 13,
		action: "Check in on a loved one you haven't seen in a while.",
	},
	{
		id: 14,
		action: "Tell your loved ones 'I love you' as often as possible.",
	},
	{
		id: 15,
		action: "Donate school supplies to a school in need.",
	},
	{
		id: 16,
		action: "Help a colleague integrate into a new work group.",
	},
	{
		id: 17,
		action: "Care for stray animals or adopt a shelter animal.",
	},
	{
		id: 18,
		action:
			"Encourage a friend or loved one to reach their personal or professional goals.",
	},
	{
		id: 19,
		action: "Listen attentively to someone who needs to talk.",
	},
	{
		id: 20,
		action: "Give a smile to a stranger on the street to brighten their day.",
	},
	{
		id: 21,
		action: "Spend time with a friend or family member who feels lonely.",
	},
	{
		id: 22,
		action:
			"Apologize sincerely when making a mistake, even when it's difficult.",
	},
	{
		id: 23,
		action:
			"Help someone going through a difficult time, such as illness or loss.",
	},
	{
		id: 24,
		action:
			"Take care of oneself by doing activities that promote mental and emotional well-being.",
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
