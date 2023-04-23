export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "20px ",
    margin: "20px"
  };

  const titleStyle = {
    margin: 0,
    color: "#333",
  };

  const buttonStyle = {
    backgroundColor: "#abcdd8",
    border: "none",
    padding: "8px",
    borderRadius: "5px",
    marginTop: "20px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
}