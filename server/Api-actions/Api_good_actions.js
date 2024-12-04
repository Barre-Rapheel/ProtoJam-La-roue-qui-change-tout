import cors from "cors";
import express from "express";

const app = express();
const serverPort = 3310;

app.use(cors());

const good_actions = [
  { id: 1, citation: "To compliment someone." },
  { id: 2, citation: "To send thanks to a relative." },
  { id: 3, citation: "To buy a coffee for a colleague or a stranger" },
  {
    id: 4,
    citation: "To share a useful resource (an article, an inspiring video).",
  },
  { id: 5, citation: "To smile at 5 people during the day." },
  { id: 6, citation: "To plant a seed in a pot or garden." },
  { id: 7, citation: "To give a meal for a homeless person" },
  { id: 8, citation: "To offer study help to a classmate." },
  { id: 9, citation: "To give back a lost item to its owner." },
  {
    id: 10,
    citation: "To repair or recycle an item instead of throwing it away.",
  },
  { id: 11, citation: "To volunteer at a retirement home." },
  { id: 12, citation: "To help a friend move house." },
  {
    id: 13,
    citation: "To check in on a loved one you haven't seen in a while.",
  },
  {
    id: 14,
    citation: "o tell your loved ones 'I love you' as often as possible.",
  },
  {
    id: 15,
    citation: "To donate school supplies to a school in need.",
  },
  {
    id: 16,
    citation: "To help a colleague integrate into a new work group.",
  },
  {
    id: 17,
    citation: "To care for stray animals or adopt a shelter animal.",
  },
  {
    id: 18,
    citation:
      "To encourage a friend or loved one to reach their personal or professional goals.",
  },
  {
    id: 19,
    citation: "To listen attentively to someone who needs to talk.",
  },
  {
    id: 20,
    citation:
      "To give a smile to a stranger on the street to brighten their day.",
  },
  {
    id: 21,
    citation: "To spend time with a friend or family member who feels lonely.",
  },
  {
    id: 22,
    citation:
      "To apologize sincerely when making a mistake, even when it's difficult.",
  },
  {
    id: 23,
    citation:
      "To help someone going through a difficult time, such as illness or loss.",
  },
  {
    id: 24,
    citation:
      "To take care of oneself by doing activities that promote mental and emotional well-being.",
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
