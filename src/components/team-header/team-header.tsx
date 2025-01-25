import { useNavigate, useParams } from "react-router-dom";

export const TeamHeader = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-xl font-semibold mt-10">
        <span
          className="cursor-pointer hover:font-semibold hover:text-black text-secondary text-md font-normal"
          onClick={() => navigate("/")}
        >
          Menu /{" "}
        </span>
        Team {teamId}
      </h1>

      <div className="flex pe-10 gap-1">
        Tasks: <span className="font-semibold">15</span>
      </div>
    </div>
  );
};
