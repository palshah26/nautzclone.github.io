import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import ReplayIcon from "@mui/icons-material/Replay";
import "./story.css";
import useWindowDimensions from "../Components/getWindowDimensions";

const Story = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  return (
    <>
      <div id='story'>
        <div
          style={{
            overflow: "hidden",
            position: "absolute",
            left: 0,
            top: 10,
            width: "50px",
            height: "25px",
          }}
        >
          <div style={{ marginTop: "-290px" }}>
            <object width={420} height={325}>
              <param
                name='movie'
                value='https://www.youtube.com/v/EjMNNpIksaI?version=3&hl=en_US&autoplay=1&autohide=2'
              />
              <param name='allowFullScreen' value='true' />
              <param name='allowscriptaccess' value='always' />
              <embed
                src='https://www.youtube.com/v/EjMNNpIksaI?version=3&hl=en_US&autoplay=1&autohide=2'
                type='application/x-shockwave-flash'
                width={420}
                height={315}
                allowscriptaccess='always'
                allowFullScreen='true'
              />
            </object>
          </div>
          <div className='fixed top-2 left-1/2 flex justify-between w-1/2'>
            <Link
              className=' bg-transparent py-3 px-5 rounded-full text-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 inline-block w-min cursor-pointer -translate-x-10'
              style={{ color: "#E6E6E6" }}
              onClick={() => navigate("/")}
            >
              <KeyboardBackspaceIcon />
            </Link>
            <div
              className='bg-transparent py-3 px-5 rounded-full text-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 inline-block w-min cursor-pointer'
              style={{ color: "#E6E6E6" }}
              onClick={() => window.location.reload()}
            >
              <ReplayIcon />
            </div>
          </div>
        </div>
        <p id='start'>A short time ago in a Galaxy very, very close…</p>
        <h1 id='head'>
          NAUTZ
          <sub></sub>
        </h1>
        <div class='scroll-down'></div>
        <div id='titles'>
          <div
            id='titlecontent'
            className={`${
              width <= 500 ? "mobile-titlecontent" : "desktop-titlecontent"
            }`}
          >
            <p>
              So it all dates back to the time when the planet Cerberus, which
              was placed in the farther universe, bigger and more resourceful
              than Earth, had caught itself up in a dreadful ordeal. I know
              there is no such historic or scientific claim of such a planet
              because Cerberus swallowed itself and became a dead planet before
              science could recover it. But the only proof that remains of this
              mishap is the existence of Nautz, a group of 5000 cultured men.
              This group was led by my great grandfather Elon Tusk, to save the
              habitat of other planets with the help of their bitter
              experiences.
            </p>
            <p>
              Let's start from the start. Hundred years back the resourceful and
              rich planet of Cerberus was toppled by the radioactivity of a
              nuclear disaster that happened in Cerberus Nuclear Power Plant.
              The calamity occurred during a security test on the steam turbine
              of a BMRK-type nuclear reactor. The power went to zero, going
              uncontrollable and creating a chain reaction which produced
              enormous energy. The radioactive contamination happened because of
              the adverse temperature rise caused by global warming.
            </p>{" "}
            <p>
              The disaster overthrew the entire planet, and the spread of
              radioactive waves caused living and birth casualties. Water bodies
              were polluted, forests went down, and natural resources started to
              lay dead. The average life expectancy went down to the 30s, my
              ancestral stories still terrify me , how my forefathers lived
              young ready to welcome death at any time.
            </p>{" "}
            <p>
              However, few people managed to survive a little longer by taking
              iodine tablets that reduced the effect of radioactivity by 70℅.
              Along with the few who survived was my grandfather, Elon Tusk who
              flocked a group of flamboyant young men from outer universes who
              were well acquainted with aeronautical evolution and were
              sensitive towards sustainability.
            </p>{" "}
            <p>
              These men were a perfect blend of science and nature. My
              grandfather Elon and the Nautz were a great devotee of science and
              knew how to forge aircrafts and had cracked the code to travel to
              an infinite number of realities, planets and dimensions through
              portals. After encountering the living horrors of Cerberus, they
              first started with their Earth voyage to educate people for using
              environment-friendly and less planet-destructive tools in order to
              progress.
            </p>{" "}
            <p>
              The Nautz introduced a new vision to all of them, how they aimed
              to sustain nature by stimulating scientific growth and striving to
              lift the ethics of space and aeronautical studies. The Nautz soon
              realised how passionate the people of Earth were to make their
              dreams reach outer space but due to inadequate resources they were
              deprived of the riches of aeronautics. The Nautz supported their
              dreams through educational programmes, scholarships and sponsoring
              NASA and ISRO visits. Their presence made the digital evolution
              reach its peak. When nautz arrived, they came with so much high
              technology, rare metals and plants.
            </p>{" "}
            <p>
              From the knowledge and resources they had revolutionized the world
              that we live in, every single person associated with nautz still
              continues to board their ship of dreams. They enlightened people
              with NFTs, which stands for non-fungible tokens. NFT art is a
              digital investment that is collectable, unique, and
              non-transferrable. Every NFT is distinctive in its productive
              design and cannot be duplicated, making them limited, rare, cheap
              and sustainable. Nautz community added perks to all NFT holders,
              every holder will have so many utilities and value addition. A
              chance to go to NASA academy, train as an astronaut and get an
              opportunity to travel to space.
            </p>{" "}
            <p>
              Elon tusk propagated simultaneous ways to support nature and the
              community at large. He declared a strategy for every NFT bought:
              the Nautz would plant 5 trees and generate carbon credits by using
              natural energy sources. Such refined ways bloomed the living
              standards of people and the legacy of the Nautz community has
              continued for decades to come. It started 100 years back with 5000
              men and with every passing year on Earth it has multiplied itself
              to thousands spread across universes helping concrete dynasties to
              survive themselves through sustainability. An empire started by my
              grandfather, Elon Tusk and Nautz is now benefiting lives in
              various aspects.
            </p>
            <p className='center'>Thank You.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
