import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ShowCard({ score }) {
  const { show } = score || {};
  const { image, id } = show || {};
  return (
    <Card>
      <Link to={`/shows/${id}`}>
        <Card.Img
          variant="top"
          src={image.original}
          style={{ height: "400px", borderRadius: "5px" }}
        />
      </Link>
    </Card>
  );
}

export default ShowCard;
