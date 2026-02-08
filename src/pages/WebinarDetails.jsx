import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WebinarDetails() {
  const { id } = useParams();
  const [webinar, setWebinar] = useState(null);

  useEffect(() => {
    axios.get(`/api/webinars/${id}`).then(res => {
      setWebinar(res.data);
    });
  }, []);

  if (!webinar) return null;

  return (
    <div className="container text-white py-5">
      <h1>{webinar.title}</h1>
      <p>{webinar.description}</p>

      <h5>Date: 26 January</h5>
      <h5>Platform: Google Meet</h5>

      {webinar.meetLink ? (
        <a
          href={webinar.meetLink}
          className="btn btn-success mt-3"
          target="_blank"
        >
          Join Google Meet
        </a>
      ) : (
        <p className="text-warning mt-3">
          Meet link will be shared soon by admin
        </p>
      )}
    </div>
  );
}
