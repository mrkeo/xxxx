import { Tooltip } from "@material-ui/core";
import React from "react";

const SocialLinks = () => (
  <>
    <a
      className="mr-3"
      href="https://github.com/trolit"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>
    <Tooltip title={<div className="link-tooltip">dblp profile</div>} arrow>
      <a
        className="mr-3"
        href="https://dblp.org/pers/hd/i/Idzikowski:Pawel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="dblp"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M21.3 14.58l-2.45-9.16s-.15-.59-.72-.33l-5.6 2.6l.86 3.2l1.09 4.08l.01.06c.05.47-.41.79-.41.79l-1.88.87l.5 1.89l.04.1c.07.17.28.6.81.91l6.95 4.27s.68.41.52-.17l-1.98-7.4l1.86-.86s.56-.26.4-.85zm-7.54.09l-.01-.06l-1.13-4.22l-.66-2.45l-.67-2.49v-.04s-.16-.59-.84-1L3.5.14s-.68-.41-.52.17l1.99 7.42l-1.87.87s-.56.26-.4.85l2.45 9.16s.16.59.72.33l6.17-2.87l1.3-.61s.52-.24.42-.79z" />
        </svg>
      </a>
    </Tooltip>
    <Tooltip title={<div className="link-tooltip">GitHub stats</div>} arrow>
      <a
        className="mr-3"
        href="https://profile-summary-for-github.com/user/trolit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="trolit account GitHub stats"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
        >
          <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z" />
        </svg>
      </a>
    </Tooltip>
    <Tooltip title={<div className="link-tooltip">Discord: <span style={{color: '#80F5FF'}}>trol_IT#8002</span></div>} arrow>
      <a
        className="mr-3"
        href="https://discord.com/channels/@me"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ref to Discord"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <path d="M26.964 0c1.875 0 3.385 1.516 3.474 3.302V32l-3.568-3.031l-1.958-1.781l-2.141-1.865l.891 2.938H4.948c-1.87 0-3.385-1.417-3.385-3.302V3.308c0-1.786 1.516-3.302 3.391-3.302h22zm-8.157 7.578h-.042l-.271.266c2.766.802 4.104 2.052 4.104 2.052c-1.781-.891-3.391-1.339-4.995-1.521c-1.156-.177-2.318-.083-3.297 0h-.271c-.625 0-1.958.271-3.745.984c-.62.271-.979.448-.979.448s1.333-1.339 4.281-2.052l-.182-.177s-2.229-.089-4.635 1.693c0 0-2.406 4.193-2.406 9.359c0 0 1.333 2.318 4.99 2.406c0 0 .536-.708 1.073-1.333c-2.052-.625-2.854-1.875-2.854-1.875s.182.089.448.266h.078c.042 0 .063.021.083.042v.01c.021.021.042.036.078.036c.443.182.88.359 1.24.536c.625.266 1.422.536 2.401.714c1.24.182 2.661.266 4.281 0c.797-.182 1.599-.354 2.401-.714c.516-.266 1.156-.531 1.859-.984c0 0-.797 1.25-2.938 1.875c.438.62 1.057 1.333 1.057 1.333c3.661-.083 5.083-2.401 5.161-2.302c0-5.161-2.422-9.359-2.422-9.359c-2.177-1.62-4.219-1.682-4.578-1.682l.073-.026zm.224 5.886c.938 0 1.693.797 1.693 1.776c0 .99-.76 1.786-1.693 1.786c-.938 0-1.693-.797-1.693-1.776c0-.99.76-1.786 1.693-1.786zm-6.057 0c.932 0 1.688.797 1.688 1.776c0 .99-.76 1.786-1.693 1.786c-.938 0-1.698-.797-1.698-1.776c0-.99.76-1.786 1.698-1.786z" />
        </svg>
      </a>
    </Tooltip>
  </>
);

export default SocialLinks;
