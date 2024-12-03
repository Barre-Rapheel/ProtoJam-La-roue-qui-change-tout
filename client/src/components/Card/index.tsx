import "./Card.css";

interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </article>
  );
}
