export interface CardProps {
  index: number;
  onClick: () => void;
}

export const Card = ({ onClick, index }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className="card rounded w-96 hover:scale-105 border cursor-pointer"
    >
      <div className="card-body">
        <h2 className="card-title">Team {index}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};
