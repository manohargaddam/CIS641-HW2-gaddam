/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons }) => {
  return (
    <div className="bg-secondary py-5 px-5">
      <div className="container">
        <div className=" row align-items-center">
          <div className="col-sm-6">
            <h1 className="text-primary fw-bold display-3">{title}</h1>
            <p>{description}</p>
            <div className="text-center">
              {buttons.map((value, index) =>
                value.isPrimary ? (
                  <Link key={index} href={value.link}>
                    <a className="btn btn-primary my-1 mx-3">{value.title}</a>
                  </Link>
                ) : (
                  <Link key={index} href={value.link}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary my-1 mx-3"
                    >
                      {value.title}
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <img
              className="img-fluid my-3 card-image"
              width="250"
              height="250"
              src={image}
              alt="profile of hashirshoaeb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = ({ title, description }) => {
  return (
    <div id="about" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CISProj = () => {
  return (
    <div id="CISProj" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">CIS 641- Project</h1>
        <div className="px-sm-5">
          <p>
            <b>Introduction:</b> The project revolves around the development of
            the "Retro Board Application," a digital tool designed to
            revolutionize the way agile teams conduct retrospectives.
          </p>
          <p>
            <b>Key Features</b>
          </p>
          <p>
            <u>Retrospective Board Creation:</u> The core functionality of the
            application revolves around the creation and management of
            retrospective boards. It provides teams with an intuitive interface
            for inputting feedback, categorizing issues, and voting
            collaboratively on the most critical matters.
          </p>
          <p>
            <u>User-Friendly Interface:</u> The application is designed to be
            user-friendly and easy to navigate, ensuring that team members can
            quickly adapt to the digital solution, ultimately enhancing the
            efficiency and effectiveness of the retrospective process.
          </p>
          <p>
            <b>The Bigger Picture:</b> My engagement in this project underscores
            my unwavering commitment to acquiring and implementing the valuable
            skills I've gained through the system analysis and design course.
            While the project may initially appear academic in nature, it serves
            as a concrete demonstration of my dedication to ongoing
            self-improvement and my capacity to tackle real-world challenges by
            devising innovative and streamlined solutions.
          </p>
          Link to{" "}
          <a
            href="https://manohargaddam.github.io/GVSU-CIS641-SOPHOS/"
            style={{ fontWeight: 800, textDecorationLine: "underline" }}
          >
            Project Retrofy
          </a>
        </div>
      </div>
    </div>
  );
};
