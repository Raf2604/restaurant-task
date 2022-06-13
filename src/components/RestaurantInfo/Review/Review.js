import StarRatings from "react-star-ratings";

import "./styles.scss";

const Review = ({ review }) => {
  return (
    <div className="review">
      <p className="name">{review.name}</p>
      <p className="date">{review.date}</p>
      <StarRatings
        rating={review.rating}
        starRatedColor="#e99324"
        numberOfStars={5}
        name="rating"
        starDimension="25px"
        starSpacing="2"
      />
      <p className="comments">{review.comments}</p>
    </div>
  );
};

export default Review;
