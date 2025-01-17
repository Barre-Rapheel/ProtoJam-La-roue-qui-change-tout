import "./Card.css";

interface CardProps {
  title: string;
  content:
    | string
    | {
        q: string;
        a: string;
      };
}

export default function Card({ title, content }: CardProps) {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      {typeof content === "object" ? (
        <blockquote className="card-content">
          {content.q}
          <cite className="card-content"> {content.a}</cite>
        </blockquote>
      ) : (
        <p className="card-content">{content}</p>
      )}
    </article>
  );
}
