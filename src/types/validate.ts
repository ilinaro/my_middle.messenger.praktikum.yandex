import {
  EmailValidator,
  LoginValidator,
  NameValidator,
  PasswordValidator,
} from "../lib";

export type ValidateT =
  | typeof LoginValidator
  | typeof PasswordValidator
  | typeof NameValidator
  | typeof EmailValidator;
