//React Hooks
import React, {useState} from 'react'; //import React and state at the top
function Home() {  
   return(
    <>
        <DevInfo/>
        <hr />
        <Main/>
    </>
 
   )
  }

function Main() {
    return (
        <div>
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-shipping-fast"></i>
                    <span className="content">
                        <h3>shared resources</h3>
                        <p>cohorts contribute to book list formation</p>
                    </span>
                </div>

                <div className="icons">
                    <i className="fas fa-lock"></i>
                    <span className="content">
                        <h3>secure access</h3>
                        <p>students can share free pdfs for future cohorts</p>
                    </span>
                </div>

                <div className="icons">
                    <i className="fas fa-redo-alt"></i>
                    <span className="content">
                        <h3>easy reviews</h3>
                        <p>semester reflections help shape learning</p>
                    </span>
                </div>

                <div className="icons">
                    <i className="fas fa-headset"></i>
                    <span className="content">
                        <h3>24/7 support</h3>
                        <p>instructor support anytime in order to succeed</p>
                    </span>
                </div>

            </div>
        </div>
    )
}

function DevInfo() {
    //initialize the state to an object
    const [developer, setDeveloper] = useState({
        name: "Kit Fenrir Amreik (they/she)",
        location: "Denver, CO",
        github: "https://github.com/Kitamreik",
        linkedIn: "https://www.linkedin.com/in/kit-amreik/",
        email: "kitdamreik@gmail.com",
        website: "https://tj-practitioner-directory.onrender.com/",
        portfolio: "https://kit-fenrir-amreik-portfolio.onrender.com/",
        gradYear: 2022,
        tfYear: 2025,
        teachingYear: 3
    })

    const handleAddTeachYear = () => {
        setDeveloper((prevState) => {
            //make a copy of the prevState and change what to you need to
            const newTeach = {...prevState, teachingYear: developer.teachingYear + 1};
            return newTeach;
        })
    }

    const handleNextYear = () => {
        setDeveloper((prevState) => {
            //make a copy of the prevState and change what to you need to
            const newYear = {...prevState, tfYear: developer.tfYear + 1};
            return newYear;
        })
    }
    return(
        <section className="home" id="home">  {/* must be first */}
            <div className="row">
                <span className="content">
                <h1>Current Developer Information</h1>
                    <p>The current developer working on this React interface is {developer.name}, who resides in {developer.location}, and can be reached at <a href="mailto:kitdamreik#gmail.com">{developer.email}</a> . Their website links and information can be found below:</p>
                   <p>Github: <a href="https://github.com/Kitamreik">{developer.github}</a></p>
                   <p>LinkedIn: <a href="https://www.linkedin.com/in/kit-amreik/">{developer.linkedIn}</a></p>
                   <p>Website: <a href="https://tj-practitioner-directory.onrender.com/">{developer.website}</a></p>
                   <p> Portfolio: <a href="https://kit-fenrir-amreik-portfolio.onrender.com/">{developer.portfolio}</a></p>
                    <p>Kit has also been a CodeSquad bootcamp grad since {developer.gradYear} and is currently on year <button onClick={handleAddTeachYear}>{developer.teachingYear}</button>of teaching as of <button onClick={handleNextYear}>{developer.tfYear}</button>.</p>
                </span>
                </div>
        </section>
    )
}

export default Home;
