import React from "react";
import Image from "next/image";
import Button from "../(components)/Button";
import Header from "../(components)/Header";

const About = () => {
  return (
    <>
      <Header title="ABOUT US" />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world's largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            {/* button component */}
            <Button title="EXPLORE MORE" />
          </div>
          <div className="about-col">
            <Image
              src={"/img/about.png"}
              alt="About Image"
              height={50}
              width={30}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
