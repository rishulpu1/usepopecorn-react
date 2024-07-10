const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};
const starsContainer = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starsContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>s{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
