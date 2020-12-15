import { Styled, jsx } from "theme-ui";
import { Tooltip } from "@material-ui/core";
import { jsPDF } from "jspdf";
import Moment from "react-moment";

var moment = require('moment');

// type ProjectsProps = {
//   projects: {
//     color: string
//     slug: string
//     title: string
//     service: string
//     client: string
//     cover: ChildImageSharp
//     date: Date
//     language: string
//     labels: string
//   }[]
//   [key: string]: any
// }

// to add images use snippet below: 
// doc.addImage(projects[i].cover.childImageSharp.fluid.src, xPos, yPos, width, height)
function createDocument(projects: ProjectProps) {;
  const doc = new jsPDF();
  const title = document.querySelector("meta[property='og:title']").getAttribute("content");
  doc.setFontSize(30);
  doc.addImage("avatar.png", 10, 10, 35, 35);
  doc.text(title, 55, 23.5);
  doc.setFontSize(12);
  doc.text(` LIST OF PROJECTS`, 54.2, 29.8);
  doc.setFontSize(8);
  doc.text(`document generated on ${moment().format('DD.MM.YYYY')} with jsPDF`, 55.5, 33.8);
  doc.text("source URL: ", 55.5, 37.5);
  doc.textWithLink(`${window.location.href}`, 72.2, 37.5, {url: window.location.href});
  doc.setFontSize(12);
  let y = 60;
  for (let i = 0; i < projects.length; i++) {
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`{ ${i + 1} - ${moment(projects[i].date).format('DD.MM.YYYY') } }`, 10, y);
    doc.setTextColor(0);
    y += 5;
    doc.setFontSize(12);
    doc.text(`${projects[i].title} (${projects[i].service})`, 10, y);
    y += 5;
    doc.setFontSize(10);
    doc.text(`${projects[i].labels}`, 10, y);
    y += 5;
    doc.setFontSize(8);
    doc.setFont("times", "italic");
    let text = projects[i].desc.length > 250 ? projects[i].desc.substr(0, 250) : projects[i].desc;
    let splitText = doc.splitTextToSize(text, 100)
    for (let i = 0, length = splitText.length; i < length - 1; i++) {
      let textRow = splitText[i];
      if (i === length - 2) {
        doc.text(`${textRow}...`, 10, y);
      } else {
        doc.text(textRow, 10, y);
      }
      y += 5;
    }
    doc.line(10, y, 70, y);
    y += 5;
    doc.setFont("times", "normal");
    doc.text("read more at: ", 10, y);
    doc.textWithLink(`${window.location.href.slice(0, -1)}${projects[i].slug}`, 26, y, {url: `${window.location.href.slice(0, -1)}${projects[i].slug}`});
    y += 10;
    doc.setFontSize(12);
    if (i === 10) {
      doc.addPage();
      y = 15;
    }
  }
    doc.save("a4.pdf");
}

const GeneratePdf = ({ projects }: ProjectsProps) => {
  console.log(projects);
  return (
    <Styled.div className="w-100 text-center mt-4 mb-1">
        <Tooltip title={<div className="pdf-link-tooltip">Export projects to &nbsp; <span className="iconify" data-icon="grommet-icons:document-pdf" style={{width: '1.5rem', height: '1.5rem'}} data-inline="true"></span></div>} arrow>
            <a className="download-pdf-anchor" onClick={() => createDocument(projects)}>
                <span className="iconify" style={{width: '6rem', height: '6rem', cursor: 'pointer'}} data-icon="bi:download" data-inline="false"/>
            </a>
        </Tooltip>
    </Styled.div>
  );
};

export default GeneratePdf;
