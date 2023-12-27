import React from "react";
import Header from "../(components)/Header";
import CoursesCard from "../(components)/CoursesCard";
import BestCourseCard from "../(components)/BestCourseCard";

const Courses = () => {
  return (
    <>
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <CoursesCard heading="Undergraduate Programs" />
          <CoursesCard heading="Graduate Programs" />
          <CoursesCard heading="Adult Learning & Degree Completion" />
        </div>
      </section>

      {/* best COURSES */}
      <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <BestCourseCard
            heading="Web Development"
            imageSource="/img/course1.png"
          />
          <BestCourseCard
            heading="Artificial Intelligence"
            imageSource="/img/course2.png"
          />
          <BestCourseCard
            heading="Data Science"
            imageSource="/img/course3.png"
          />
        </div>
      </section>
    </>
  );
};

export default Courses;
