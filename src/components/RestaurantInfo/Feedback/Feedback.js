import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import StarRatings from "react-star-ratings";

import "./styles.scss";

const Feedback = ({}) => {
  const [rating, setRating] = useState(1);

  const handleSubmit = (values, { resetForm }) => {
    const sendData = { ...values, rating: rating, date: new Date() };
    //FOR FUTURE: HERE WILL BE POST REQUEST FOR SEND FEEDBACK TO BACKEND
    console.log(sendData);

    resetForm({
      name: "",
      comment: "",
    });
    setRating(1);
  };

  return (
    <div className="feedback">
      <p className="feedback-title">Your Feedback</p>
      <div>
        <Formik
          initialValues={{
            name: "",
            comment: "",
          }}
          onSubmit={handleSubmit}
          validate={(values) => {
            let errors = {};
            if (!values.name) {
              errors.name = "Name is required!";
            }
            if (!values.comment) {
              errors.comment = "Please leave some comment!";
            }
            return errors;
          }}
        >
          {() => {
            return (
              <Form>
                <div>
                  <div>
                    <Field name="name" placeholder="Name*" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-messsage"
                    />
                    <div>
                      <StarRatings
                        rating={rating}
                        starRatedColor="#e99324"
                        changeRating={(val) => setRating(val)}
                        numberOfStars={5}
                        name="rating"
                        starDimension="25px"
                        starSpacing="2"
                      />
                    </div>
                    <Field
                      name="comment"
                      component="textarea"
                      placeholder="Comment*"
                    />
                    <ErrorMessage
                      name="comment"
                      component="div"
                      className="error-messsage"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Feedback;
