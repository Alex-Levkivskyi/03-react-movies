import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message = "There was an error loading movies. Please try again later.",
}: ErrorMessageProps) => {
  return <p className={styles.text}>{message}</p>;
};

export default ErrorMessage;
