import React from "react"
import { Global } from "@emotion/core"
import { Box } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import useNavigation from "../hooks/use-navigation"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"
import GeneratePdf from "../../../components/generate-pdf"

type LayoutProps = { children: React.ReactNode; className?: string }

function returnAllProjects(node: React.ReactNode) {
  let projectsLength = React.Children.toArray(node).length;
  let projectsArr = [];
  for (let i = 0; i < projectsLength; i++) {
    projectsArr[i] = node[i].props.node;
  }
  return projectsArr;
}

const Layout = ({ children, className = `` }: LayoutProps) => {
  const meta = useSiteMetadata()
  const nav = useNavigation()
  const url = typeof window !== 'undefined' ? window.location.href : '';
  // returnAllProjects(children);
  return (
    <React.Fragment>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <SEO />
      <Header meta={meta} nav={nav} />
      <Box as="main" variant="layout.main" className={className}>
        {children}
      </Box>
      { url.split("/").pop() ? null : <GeneratePdf projects={returnAllProjects(children)} />}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
