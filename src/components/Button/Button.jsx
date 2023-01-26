import { Button } from "./Button.Styled";

const LoadMore = ({ onClick, children }) =>
  <Button onClick={onClick} type="button">{children}</Button>;

export default LoadMore;