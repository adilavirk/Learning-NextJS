import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Link from "next/link";
import CoursesCard from "./(components)/CoursesCard";
import CampusCard from "./(components)/CampusCard";
import BestCourseCard from "./(components)/BestCourseCard";
import Testimonial from "./(components)/Testimonial";

export default function Home() {
  return (
    <>
      <section className="header">
        <Navbar />

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro <br />
            esse blanditiis in quae perspiciatis quo.
          </p>
          <Link href="/" className="hero_btn">
            Visit Us To Know More
          </Link>
        </div>
      </section>

      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>
          EXPLORE OUR 60+ <br />
          MAJOR PROGRAMS
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <CoursesCard heading="Undergraduate Programs" />
          <CoursesCard heading="Graduate Programs" />
          <CoursesCard heading="Adult Learning & Degree Completion" />
        </div>
      </section>
      {/* campus section */}
      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <CampusCard source="/img/Campus1.png" heading="DELHI" />
          <CampusCard source="/img/Campus2.png" heading="HYDERABAD" />
          <CampusCard source="/img/Campus3.png" heading="MUMBAI" />
        </div>
      </section>

      {/* <!-- Facilities Section Start --> */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <BestCourseCard heading="Best Libary" imageSource="/img/libary.png" />
          <BestCourseCard
            heading="Athletics"
            imageSource="/img/playground.png"
          />
          <BestCourseCard
            heading="Tasty and Healthy Food"
            imageSource="/img/food.png"
          />
        </div>
      </section>
      {/* <!-- Facilities Section End --> */}
      {/* <!-- Testimonials Section Start --> */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Testimonial
            source={"/img/user.png"}
            alt="oo.."
            studentName="Arslan"
          />
          <Testimonial
            source={"/img/user.png"}
            alt="oo.."
            studentName="Adila"
          />
        </div>
      </section>
      {/* <!-- Testimonials Section End --> */}

      {/* <!-- Call To Action Section Start --> */}
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact" className="hero_btn">
          CONTACT US
        </Link>
      </section>
      {/* <!-- Call To Action Section End --> */}
    </>
  );
}
