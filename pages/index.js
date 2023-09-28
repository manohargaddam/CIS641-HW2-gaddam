import { About, Intro } from "../components/Intro";
import { Contact, Footer } from "../components/Footer";
import { Projects, Skills } from "../components/Work";
import React, { Fragment } from "react";
import {
  SEO,
  about,
  contact,
  intro,
  navigation,
  projects,
  work,
} from "../config/config";

import { Header } from "../components/Header";
import { Nav } from "../components/Navbar";

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About title={about.title} description={about.description} />
      <Skills title={work.title} cards={work.cards} />
      <Projects title={projects.title} cards={projects.cards} />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
    </Fragment>
  );
}
