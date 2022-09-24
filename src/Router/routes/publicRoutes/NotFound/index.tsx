import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Page Not Found</div>
      <button onClick={() => navigate("/profile")}>Go Back</button>
    </div>
  );
};

export default NotFound;
