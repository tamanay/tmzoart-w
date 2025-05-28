export default function GlobalStyles() {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: "COLAK";
          src: url("/fonts/COLAK.woff2") format("woff2"),
            url("/fonts/COLAK.woff") format("woff");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "IRANSansX";
          src: url("/fonts/IRANSansX.woff2") format("woff2"),
            url("/fonts/IRANSansX.woff") format("woff");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        body {
          font-family: "IRANSansX", Tahoma, sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          color: #2a3a21;
          background: linear-gradient(to bottom, #034d23, #f8e49f);
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: "COLAK", serif;
          font-weight: 700;
          color: #196c2d;
          line-height: 1.3;
          margin: 0 0 0.5em 0;
          letter-spacing: 0.05em;
          text-rendering: optimizeLegibility;
          -webkit-font-feature-settings: "liga", "clig", "calt";
          font-feature-settings: "liga", "clig", "calt";
        }
        a {
          color: #8b6b13;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover, a:focus {
          color: #d4b458;
          outline: none;
        }
        button, .btn {
          font-family: "IRANSansX", sans-serif;
          font-weight: 600;
          background-color: #1f6e3f;
          color: #f3e6a7;
          border: none;
          padding: 0.6em 1.2em;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover, .btn:hover {
          background-color: #16672b;
        }
        p {
          margin: 0 0 1.2em 0;
          font-size: 1rem;
          color: #2e3b23;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
        }
        @media (max-width: 768px) {
          body {
            font-size: 15px;
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.5rem;
          }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}