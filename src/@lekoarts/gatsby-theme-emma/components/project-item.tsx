/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { animated } from "react-spring";
import { ChildImageSharp } from "../types";
import Moment from "react-moment";

type ProjectItemProps = {
  node: {
    color: string;
    title: string;
    slug: string;
    service: string;
    client: string;
    cover: ChildImageSharp;
    date: Date;
    language: string;
    labels: string;
  };
  style: any;
};

const ProjectItem = ({ node, style }: ProjectItemProps) => (
  <animated.div
    sx={{
      position: `relative`,
      "&:before": {
        content: `""`,
        display: `block`,
        paddingTop: `100%`,
      },
    }}
    style={style}
  >
    <div
      sx={{
        left: 0,
        height: `100%`,
        position: `absolute`,
        top: 0,
        width: `100%`,
        a: {
          color: `white`,
          height: `100%`,
          left: 0,
          opacity: 0,
          padding: 4,
          position: `absolute`,
          top: 0,
          width: `100%`,
          zIndex: 10,
          transition: `all 0.3s ease-in-out`,
          textDecoration: `none`,
          "&:hover": {
            color: `white`,
            opacity: 1,
            textDecoration: `none`,
          },
        },
      }}
    >
      <span className="project-date font-josefinSans">
        <span
          className="iconify"
          data-icon="ic:round-timer"
          data-inline="true"
        ></span>
        &nbsp;
        <Moment date={node.date} format="DD.MM.YYYY" />
      </span>
      <div
        sx={{
          "> div": {
            height: `100%`,
            left: 0,
            position: `absolute !important`,
            top: 0,
            width: `100%`,
            "> div": {
              position: `static !important`,
            },
          },
        }}
      >
        <span
          className="iconify corner-language-icon"
          data-icon={node.language}
          data-inline="false"
        ></span>
        <Img className="gray" fluid={node.cover.childImageSharp.fluid} />
      </div>
      <div className="project-item-mobile-preview">
        <div
          sx={{
            backgroundColor: node.color,
            height: `100%`,
            left: 0,
            position: `absolute`,
            top: 0,
            width: `100%`,
            opacity: 0.5,
            zIndex: 2,
          }}
        />
        <div
          sx={{
            zIndex: 3,
            position: "absolute",
            color: "white",
            marginLeft: "5%",
          }}
        >
          <div sx={{ fontSize: 4 }}>
            <span
              className="iconify language-icon"
              data-icon={node.language}
              data-inline="false"
            ></span>
          </div>
          <div
            className="project-item-title"
            sx={{ fontSize: 2, fontWeight: `bold` }}
          >
            {node.title}
          </div>
          <div className="project-item-service" sx={{ fontSize: 1 }}>
            {node.service}
          </div>
          <div className="project-item-other" sx={{ fontSize: 0 }}>
            {node.labels} <br />
            <Moment date={node.date} format="DD.MM.YYYY" />
          </div>
        </div>
      </div>
      <Link to={node.slug} aria-label={`View detail page of ${node.title}`}>
        <img
          alt=""
          src={node.cover.childImageSharp.fluid.tracedSVG}
          sx={{
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: `100%`,
            height: `100%`,
            filter: `invert(100%)`,
            zIndex: -1,
            opacity: 0.08,
            objectFit: `cover`,
          }}
        />
        <div className="project-item-desktop-preview">
          <div
            sx={{
              backgroundColor: node.color,
              height: `100%`,
              left: 0,
              position: `absolute`,
              top: 0,
              width: `100%`,
              zIndex: -2,
            }}
          />
          <div>
            <span
              className="iconify language-icon"
              data-icon={node.language}
              data-inline="false"
            ></span>
          </div>
          <div
            className="project-item-title"
            sx={{ fontSize: 2, fontWeight: `bold` }}
          >
            {node.title}
          </div>
          <div className="project-item-service" sx={{ fontSize: 1 }}>
            {node.service}
          </div>
          <div className="project-item-other" sx={{ fontSize: 0 }}>
            {node.labels} <br />
            <Moment date={node.date} format="DD.MM.YYYY" />
          </div>
        </div>
      </Link>
    </div>
  </animated.div>
);

export default ProjectItem;
