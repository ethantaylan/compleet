import { useNavigate } from "react-router-dom";
import { Card } from "../common/card/card";

export const Teams = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">

      <div className="flex flex-wrap gap-5 mt-3">
        {[1, 2, 3, 4, 5].map((index) => (
          <Card
            key={index}
            index={index}
            onClick={() => navigate(`/team/${index}`)}
          />
        ))}
      </div>
    </div>
  );
};
