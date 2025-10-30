import React, { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import theme from "../theme";
import cubesVideo from "../assets/cubes_8.mp4";
import tuimineImg from "../assets/tuimine.png";
import minesweeperImg from "../assets/minesweeper.png";
import mazeImg from "../assets/maze.png";
import snakeImg from "../assets/snake.png";
import "../ProjectShowcase.css";

const projects = [
  {
    title: "3D Render in C",
    image: null,
    video: cubesVideo,
    github: "https://github.com/Sai-Prabhav/my_3d_render",
    website: null,
    description: (
      <div>
        <p>
          This project draws outlines of 3D shapes in SVG. You can also animate the objects and save an SVG for each frame, then use <code>ffmpeg</code> to convert them into a video.
        </p>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
          <li><b>Language and Library:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>C programming</li>
              <li><code>csketch</code> library written in C</li>
            </ul>
          </li>
          <li><b>Challenges:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Minimal knowledge in C. Started this project in the first week of learning C.</li>
            </ul>
          </li>
          <li><b>Outcome:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Learnt practical usage of C</li>
              <li>Deeper understanding of dynamic memory allocation</li>
              <li>A satisfying program to run</li>
              <li>Real world applications of linear algebra</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "TUI Minesweeper (C++)",
    image: tuimineImg,
    github: "https://github.com/Sai-Prabhav/tui_mine/tree/main",
    website: null,
    description: (
      <div>
        <p>
          This project is a classic Minesweeper game playable in the terminal using ASCII graphics. Developed during the summer of 2025.
        </p>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
          <li><b>Language and Library:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>C++ programming</li>
              <li>ncurses library for terminal-based UI</li>
            </ul>
          </li>
          <li><b>Challenges:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Limited prior experience with ncurses and terminal-based game development</li>
            </ul>
          </li>
          <li><b>Outcome:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Gained practical experience in C++ programming</li>
              <li>Learned to implement interactive terminal interfaces with ncurses</li>
              <li>Developed a fully functional and satisfying game</li>
              <li>Deepened understanding of game logic and user input handling</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Minesweeper in Godot",
    image: minesweeperImg,
    github: "https://github.com/Sai-Prabhav/minesweeper-godot",
    website: "https://greenflame41.itch.io/minesweeper",
    description: (
      <div>
        <p>
          This project is a Minesweeper game built in Godot, featuring unique hexagonal and triangular grid shapes, with custom pixel art created for the game’s visuals. Developed during the summer of 2025.
        </p>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
          <li><b>Language and Library:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>GDScript programming</li>
              <li>Godot game engine</li>
            </ul>
          </li>
          <li><b>Challenges:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Limited experience with Godot, as this was my second project using the engine</li>
              <li>Creating pixel art from scratch with minimal artistic skills</li>
              <li>Writing custom grid-to-local and local-to-grid conversion functions for hexagonal and triangular grids</li>
            </ul>
          </li>
          <li><b>Outcome:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Gained foundational experience in GDScript and Godot development</li>
              <li>Developed skills in creating basic pixel art</li>
              <li>Mastered geometric algorithms for non-square grid systems</li>
              <li>Created a unique, playable Minesweeper variant with custom grid shapes</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Maze in Godot",
    image: mazeImg,
    github: "https://github.com/Sai-Prabhav/maze-godot",
    website: "https://greenflame41.itch.io/the-maze",
    description: (
      <div>
        <p>
          This project is a maze game built in Godot, featuring a custom random maze generator and maze-solving algorithms, created as my first game development project.
        </p>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
          <li><b>Language and Library:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>GDScript programming</li>
              <li>Godot game engine</li>
            </ul>
          </li>
          <li><b>Challenges:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Developing a custom random maze generator from scratch</li>
              <li>Implementing maze-solving algorithms and understanding pathfinding techniques</li>
              <li>Learning Godot’s architecture and GDScript as a beginner</li>
            </ul>
          </li>
          <li><b>Outcome:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Gained foundational experience in GDScript and Godot engine development</li>
              <li>Developed a deeper understanding of procedural generation and pathfinding algorithms</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Games in Python",
    image: snakeImg,
    github: "https://github.com/Sai-Prabhav/Games-in-Python",
    website: null,
    description: (
      <div>
        <p>
          This project is a collection of classic games—Snake, Tetris, and Conway’s Game of Life along with several unfinished prototypes, developed as one of my first major coding endeavors. I developed this at the age of 16.
        </p>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
          <li><b>Language and Library:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Python programming</li>
              <li>Pygame library</li>
            </ul>
          </li>
          <li><b>Challenges:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Learning Pygame’s event handling and graphics rendering to create interactive game mechanics</li>
              <li>Choosing right data structures for the job</li>
            </ul>
          </li>
          <li><b>Outcome:</b>
            <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0 }}>
              <li>Gained practical experience in Python and Pygame for game development</li>
              <li>Developed a strong foundation in logic building and problem-solving through game mechanics</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
];

const ProjectShowcase = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <h2 style={{ fontFamily: theme.fonts.heading }}>
        Projects
      </h2>
      {projects.map((project, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center', // vertical center on desktop
            width: '100% -25px',
            background: theme.colors.cardBg,
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            marginBottom: '2rem',
            padding: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          className="project-card-responsive"
        >
          {/* Image/Video on the left or top */}
          <div
            style={{

              marginRight: '2rem',
              marginBottom: '10px',

              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '320px',
            }}
            className="project-media-responsive"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  maxWidth: '320px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              />
            )}
            {project.video && (
              <video
                ref={project.title === "3D Render in C" ? videoRef : undefined}
                src={project.video}
                width="320"
                height="auto"
                controls
                autoPlay
                loop
                muted
                style={{
                  maxWidth: '320px',
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              />
            )}
          </div>
          {/* Content on the right or below */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              textAlign: 'left',
              minWidth: 0,
            }}
            className="project-content-responsive"
          >
            <h2 style={{ margin: '0 0 0.5rem 0', textAlign: 'left' }}>{project.title}</h2>
            <p
              style={{
                margin: '0 0 1rem 0',
                color: theme.colors.textSecondary,
                fontSize: '1rem',
                textAlign: 'left',
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.colors.primary,
                    fontWeight: 500,
                    textAlign: 'left',
                  }}
                >
                  GitHub
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.colors.primary,
                    fontWeight: 500,
                    textAlign: 'left',
                  }}
                >
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectShowcase;
