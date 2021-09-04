import React from "react";
import ourTeamImg1 from "../../../../Images/our-team-img/1.jpg";
import ourTeamImg2 from "../../../../Images/our-team-img/2.jpg";
import ourTeamImg3 from "../../../../Images/our-team-img/3.jpg";
import "./OurTeam.css";
const ourTeams = [
  {
    img: <img src={ourTeamImg1} alt="" className="ourTeamImg1" />,
    name: <h4 className="team-member-name">Business</h4>,
    title: <p>Put-together looks are always the best strategy</p>,
  },
  {
    img: <img src={ourTeamImg2} alt="" className="ourTeamImg2" />,
    name: <h4 className="sec-team-member-name">Weekend</h4>,
    title: <p>More reason to love these two days of the week</p>,
  },
  {
    img: <img src={ourTeamImg3} alt="" className="ourTeamImg3" />,
    name: <h4 className="team-member-name">Casual</h4>,
    title: <p>Keep your head in the game in these jackets</p>,
  },
];
const OurTeam = () => {
  return (
    <div style={{ background: "#f7f7f7", marginTop: "8%", padding: "6% 0" }}>
      <div className="container" style={{}}>
        <div className="products-title">
          <h3>Our Team</h3>
          <p>Looks for everything on your schedule</p>
        </div>
        <div className="row">
          {ourTeams.map((team) => (
            <div className="col-sm-4 ourTeams-container">
              {team.img}
              <div style={{ textAlign: "center" }}>
                {team.name}
                <p
                  style={{
                    fontSize: "16px",
                    color: "#556575",
                    lineHeight: "1.5",
                  }}
                >
                  {" "}
                  {team.title}
                </p>

                <button className="team-buttons">SEE MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
