import React from "react";
import theme from "../theme";
import DiscordSVG from "../assets/discord.svg";
import MailSVG from "../assets/email.svg";
import RedditSVG from "../assets/reddit.svg";
import GithubSVG from "../assets/github.svg";
import './Header.css';

const contactLinks = [
  {
    href: "mailto:saiprabhav.ss@gmail.com",
    icon: MailSVG,
    label: "Email",
  },
  {
    href: "https://github.com/Sai-Prabhav",
    icon: GithubSVG,
    label: "GitHub",
  },
  {
    href: "https://discord.com/users/792707663850635274",
    icon: DiscordSVG,
    label: "Discord",
  },
  {
    href: "https://reddit.com/user/saiprabhav",
    icon: RedditSVG,
    label: "Reddit",
  },
];

const Header = () => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2rem 0",
      borderBottom: `2px solid ${theme.colors.primary}`,
      fontFamily: 'monospace',
    }}
  >
    <h1
      className="vsaiprabhav-heading"
      style={{
        fontFamily: 'inherit',
        fontSize: "2.5rem",
        margin: 0,
      }}
    >
      V Sai Prabhav
    </h1>
    <div style={{ display: "flex", gap: "1rem" }}>
      {contactLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.colors.primary, fontFamily: 'inherit' }}
          title={link.label}
        >
          <img
            src={link.icon}
            alt={link.label}
            style={{
              width: 28,
              height: 28,
              display: "block",
            }}
          />
        </a>
      ))}
    </div>
  </header>
);

export default Header;
