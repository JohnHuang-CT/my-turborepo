import { add } from "@weber-jojo/ts-utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  console.log(add());

  return (
    <button type="button" {...other}>
      {children}123123213asdasdfffasdasdadssdasdasffff
    </button>
  );
}

Button.displayName = "Button";
