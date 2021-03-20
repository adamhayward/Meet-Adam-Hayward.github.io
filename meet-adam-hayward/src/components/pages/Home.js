import React from "react";
import Title from "../Title";
import HeadShot from "../../images/headshot.png";

function Home() {
  return (
    <div>
  
         
             
                <Title>about</Title>
            
       
            <div className="row-auto mt-4">
              <div className="col-xs-auto col-lg-10 offset-lg-1">
                <p>
                <span style={{color: "orange"}}>
                  <img
                    className="img-fluid"
                    src={HeadShot}
                    alt="Adam Hayward's head shot"
                    style={{ width: "200px", height: "200px" }}
                  ></img>
                  Hello.</span> 
                  <br/>
                  My name is Adam Hayward. I recently moved from Dallas,
                  Texas to Anchorage, Alaska. I relocated to Anchorage to be
                  near family, and of course, for adventures in this huge
                  playground that is America's last frontier.
                  <br />
                  Prior to moving, I spent the last 8 years as a manager with
                  AT&T, supervising a team of up to 25 technitians. While I
                  enjoyed my ride at AT&T, I was seeking both a lifestyle change
                  and a career change. I learned from my experiences at AT&T,
                  after being exposed to Lean and Agile methodologies, that
                  something in the Information Management (technology) field
                  would be a good fit for me. After doing a lot of research, I
                  resigned from my position and currently have the luxury of
                  focusing on completing a Full Stack Certificate though SMU.
                </p>
              </div>
            </div>

            <div className="row-auto">
              <div className="col-xs-auto col-lg-10 offset-lg-1 mt-2">
                <p>
                  Although I am new to programming, I’ve been told more than
                  once in the last few years, that I was born for problem
                  solving. I am starting to agree as I am enjoying the program
                  emensely, challenges and all. Programmers I know have told me
                  that after working hard – frustration and all – that solving
                  the problems enherent to coding, is a rush you rarlely get
                  day-to-day in other professions. I’m already hooked.
                </p>
              </div>
            </div>
          </div>
  );
}

export default Home;
