import { FieldRenderProps } from "react-final-form";
import { UserData } from "./types";

export const validateLoginForm = (value: UserData) => {
  const error: UserData = {};
  if (!value.user) {
    error.user = 'musisz podać login';
  }
  if (!value.user) {
    error.password = 'musisz podać hasło';
  }
  if (value.user && value.user.length < 8) {
    error.user = 'login musie mieć przynajmniej osiem znaków';
  }
  if (value.password && value.password.length < 8) {
    error.password = 'hasło musie mieć przynajmniej osiem znaków';
  }
  return error;
};

export const hasWrapperError = ({
  touched,
  error,
  dirty,
  submitFailed,
}: FieldRenderProps<any>['meta']): boolean => (
    (touched && error && dirty) || !!(submitFailed && error)
  );
