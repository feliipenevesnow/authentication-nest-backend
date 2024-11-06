import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'EmailValido', async: false })
export class EmailValido implements ValidatorConstraintInterface {

    private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    validate(email: string) {
        return this.emailRegex.test(email);
    }

    defaultMessage() {
        return 'O e-mail informado não é válido';
    }
}
