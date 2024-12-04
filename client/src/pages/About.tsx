import "./About.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <article className="team-picture">
        <img
          className="picture"
          src="./src/assets/images/team.png"
          alt="team"
        />
      </article>
      <section>
        <h2 className="title-about"> Welcome to The Wheel of Change!</h2>

        <p>
          Born out of creativity, collaboration, and a sprinkle of chaos, The
          Wheel of Change was crafted during the thrilling Protojam Challenge.
          The incredible team behind this project – Aghiles, Manon, Raphaël,
          Roxanne and Cécile – joined forces to design an experience that’s all
          about kindness, inspiration, and a dash of unpredictability!
        </p>

        <h3 className="title-about">How to Play</h3>
        <p>
          <strong>Spin the Wheel</strong> – Take a deep breath and click the
          button to set the wheel in motion.
        </p>
        <p>
          <strong>Your Challenge Awaits </strong>– Wherever the wheel stops,
          you’ll be presented with a Good Deed of the Day. It might be something
          small, like giving someone a compliment, or something bold, like
          volunteering your time!
        </p>
        <p>
          <strong>Get Inspired</strong> – Alongside your challenge, you’ll
          receive a Quote of the Day to ignite your motivation and keep the good
          vibes rolling.
        </p>
        <p>
          <strong>Make a Difference </strong>– Complete your good deed and
          spread kindness wherever you go.
        </p>
        <p>
          Each spin is a chance to step out of your routine, connect with
          others, and embrace the positive change we all need.
        </p>

        <p>
          <strong>
            So, are you ready to take a spin? Let The Wheel of Change show you
            just how powerful one small action can be.
          </strong>
        </p>
      </section>
      <Footer />
    </>
  );
}
