import React from "react";
import theme from "../theme";

const ProjectCard = ({
  title,
  image,
  github,
  website,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: theme.colors.card,
      color: theme.colors.text,
      margin: "2rem 0",
      borderRadius: "12px",
      width: "100%-25px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        width: 200,
        height: 120,
        objectFit: "cover",
        borderRight: `2px solid ${theme.colors.primary}`,
      }}
    />
    <div style={{ flex: 1, padding: "1.5rem" }}>
      <h3
        style={{
          fontFamily: theme.fonts.heading,
          fontSize: "1.5rem",
          margin: "0 0 1rem 0",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.colors.accent,
            fontWeight: 500,
          }}
        >
          GitHub Source
        </a>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: theme.colors.primary,
              fontWeight: 500,
            }}
          >
            Website
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
