export const Background = ({ children, image, ...props }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
      }} {...props}>
      {children}
    </div>
  );
};
