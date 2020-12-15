import { Styled, jsx } from "theme-ui";
import { Tooltip } from "@material-ui/core";
import { jsPDF } from "jspdf";
import Moment from "react-moment";
import ProjectProps from "../@lekoarts/gatsby-theme-emma/components/projects"

var moment = require('moment');

function createDocument(projects: ProjectProps) {
  const leftMargin = 10;
  let y = 10; // 10
  const doc = new jsPDF();
  const title = document.querySelector("meta[property='og:title']").getAttribute("content");
  doc.setFontSize(30);
  doc.addImage("avatar.png", leftMargin, y, 35, 35);
  doc.text(title, 55, y += 13.5); // 23.5
  doc.setFontSize(12);
  doc.text(` LIST OF PROJECTS`, 54.2, y += 6.3); // 29.8
  doc.setFontSize(8);
  doc.text(`document generated on ${moment().format('DD.MM.YYYY')} with jsPDF`, 55.5, y += 4); // 33.8
  doc.text("source: ", 55.5, y += 3.7); // 37.5
  doc.textWithLink(`${window.location.href}`, 65.2, y, {url: window.location.href}); // 37.5
  y += 22.5; // 60
  doc.setFontSize(12);
  for (let i = 0; i < projects.length; i++) {
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`{ ${i + 1} - ${moment(projects[i].date).format('DD.MM.YYYY') } }`, leftMargin, y);
    doc.setTextColor(0);
    y += 7;
    doc.setFontSize(12);
    doc.text(`${projects[i].title} (${projects[i].service})`, leftMargin, y);
    y += 5;
    doc.setFontSize(10);
    doc.text(`${projects[i].labels}`, leftMargin, y);
    y += 7;
    doc.setFontSize(8);
    doc.setFont("times", "italic");
    let text = projects[i].desc.length > 250 ? projects[i].desc.substr(0, 250) : projects[i].desc;
    let splitText = doc.splitTextToSize(text, 100)
    for (let i = 0, length = splitText.length; i < length - 1; i++) {
      let textRow = splitText[i];
      if (i === length - 2) {
        doc.text(`${textRow}...`, leftMargin, y);
      } else {
        doc.text(textRow, leftMargin, y);
      }
      y += 5;
    }
    doc.line(10, y, 120, y);
    y += 5;
    doc.setFont("times", "normal");
    doc.text("source link: ", leftMargin, y);
    doc.textWithLink(`${window.location.href.slice(0, -1)}${projects[i].slug}`, 24.5, y, {url: `${window.location.href.slice(0, -1)}${projects[i].slug}`});
    y += 10;
    doc.setFontSize(12);
    if (i === 4 || i === 10 || i === 16) {
      doc.addPage();
      y = 15;
    }
  }
    doc.save("a4.pdf");
}

const GeneratePdf = ({ projects }: ProjectsProps) => {
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
