export interface UserData {
  user: string;
  password: string;
}

export interface LoginProps {
  alertMassage: string;
}

export interface LoginAction {
  onLogin: (user: string, password: string) => void;
}
