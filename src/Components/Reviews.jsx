import React from "react";
import ReviewCard from "./ReviewCard";
import reviews from "../Data/reviews.json";

function Reviews() {
    const userReviews = reviews.map((review) => (
        <ReviewCard
            userName={review.userName}
            review={review.review}
            img= "src/assets/AlproVetLogo.jpeg" //{review.ImagePath}
            link={review.link}
        />
    ));

    return (
        <div
            style={{ height: "400px", width: "80%" }}
            className="mx-auto py-4 md:py-6"
        >
            {userReviews}
        </div>
    );
}

export default Reviews;
