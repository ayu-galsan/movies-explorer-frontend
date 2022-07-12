import "./Title.css";

function Title({ text }) {
  return (
    <div className="title">
      <h2 className="title__name">{text}</h2>
    </div>
  );
}

export default Title;
