import AbsctractValidator from './Interface/AbstractValidator'

export default class OnСontrolLogin extends AbsctractValidator {
  REGEX: RegExp = /^(?=.*[A-Za-z])[A-Za-z0-9-_]{3,20}$/i
  Message = {
    NotBlank: `Поле должно быть заполнено`,
    NotCorrect: `Логин должен быть на латинице, 
                    может содержать цифры, но не состоять из 
                    них, без пробелов, - и _ и  без спецсимволов`,
    MinLength: 'Поле должно иметь больше 3 символов',
    MaxLength: 'Поле не должно содержать больше 20 символов',
  }
}
