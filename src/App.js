import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Header from "./components/header/header";
// import Projects from "./components/projects/projects";
// import Contact from "./components/contact/contact";
// import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Helmet>
        <title>olejniczak.dev :: home</title>
        <meta
          name="description"
          content="Welcome to the portfolio page. Browse my frontend and fullstack projects. Contact me to discuss cooperation."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Oxygen:wght@700&family=Playball&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <Header /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <p>Strona w budowie.</p>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
