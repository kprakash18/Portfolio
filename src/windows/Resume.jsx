import WindowWrapper from "#/hoc/WindowWrapper";
import WindowControls from "#/components/WindowControls";
import { Download } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const RESUME_PDF = "/files/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = ()=>{
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };

    return (
        <>
        <div id="window-header">
            <WindowControls target="resume" />
              <h2>Resume.pdf</h2>
              <a 
                href={RESUME_PDF}
                download 
                className="cursor-pointer"
                title="Download resume"
              >
                <Download className="icon" />
              </a>
        </div>

        <div className="resume-content">
          <Document
            file={RESUME_PDF}
            loading={<p>Loading resume...</p>}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={560}
                renderTextLayer
                renderAnnotationLayer
              />
            ))}
          </Document>
        </div>
        
        </>
    );
};
const ResumeWindow = WindowWrapper(Resume, "resume") ;

export default ResumeWindow ;
