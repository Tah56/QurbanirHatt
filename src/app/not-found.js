export default function NotFound() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "48px", margin: 0 }}>404</h1>
      <p style={{ fontSize: "18px", margin: "10px 0" }}>
        Oops! Page not found.
      </p>

      <a
        href="/"
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px"
        }}
      >
        Go Home
      </a>
    </div>
  );
}