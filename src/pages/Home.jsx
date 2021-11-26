import { Link } from "react-router-dom";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <main className={classes.homepage}>
      <section className={classes.grid}>
        <header>
          <h2 className="heading-5">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className={classes["main-heading"]}>SPACE</h1>
          <p className={classes.paragraph}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </header>

        <div className={classes["explore-button-container"]}>
          <Link to="/destinations" className={classes["explore-button"]}></Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
