const ColorCircle = ({ color }: { color: string }) => {
  console.log(color);
  return (
    <div
      className={`w-2 rounded-full p-4`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorCircle;
