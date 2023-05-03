import "./button.css";

const Button = ({ children, color="default", size='base'}) => {
  return <button className={`${color} ${size}`}>{children}</button>;
};

export default Button;
