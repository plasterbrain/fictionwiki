import mermaid from "mermaid";
document.addEventListener("DOMContentLoaded", function (event) {
    mermaid.initialize({
        theme: "dark",
        themeVariables: {
            fontSize: "20px"
        },
        startOnLoad: true,
        securityLevel: "loose",
        logLevel: 5,
        flowchart: {
            diagramPadding: 0,
            htmlLabels: true
        }
    });
});