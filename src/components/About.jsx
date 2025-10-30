import React from 'react';
import theme from '../theme';
import './About.css';

const aboutPoints = [
  'Curious',
  'Love math and programming',
  'Mechanical keyboards enthusiast',
  'Linux user',
  'Neovim fan',
  'Fast learner',
  'Loves problem solving',
];

const goodAt = [
  'Python',
  'Haskell',
  'Linux',
  'Neovim',
];

const alsoKnow = [
  'Godot',
  'C',
  'C++',
  'Lua',
  'Flutter',
  'JavaScript',
  'React',
];

const About = () => (
  <section style={{ padding: '2rem 0', borderBottom: `1px solid ${theme.colors.card}`, textAlign: 'left' }}>
    <h2 style={{ fontFamily: theme.fonts.heading, fontSize: '2rem', textAlign: 'left' }}>About Me</h2>
    <p style={{ width: '100%', margin: '1rem 0 1.5rem 0', fontSize: '1.15rem', color: theme.colors.textSecondary, textAlign: 'left' }}>
      <span style={{ fontWeight: 600, fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
        Curious Programmer, Math Enthusiast &amp; Problem Solver
      </span>
      Driven to optimize systems through thoughtful personalization, including custom mechanical keyboards, a refined Neovim workflow, and a streamlined NixOS environment. Self-taught developer with strong proficiency in <b>Python</b>, <b>Haskell</b>, and <b>Linux</b>, complemented by working knowledge of <b>Godot</b>, <b>C</b>, <b>C++</b>, <b>Lua</b>, <b>Flutter</b>, <b>JavaScript</b>, and <b>React</b>.
    </p>
  </section>
);

export default About;
