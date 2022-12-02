import Input from '../components/Input';

import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    passwordMatchRule
} from './InputValidationRules';

const createFormFieldConfig = (label, id, type, defaultValue = '') => {
    return {
        createInput: (changeHandler, blurHandler, value, touched, error) => {
            return (
                <Input
                    key={id}
                    id={id}
                    type={type}
                    label={label}
                    value={value}
                    touched={touched}
                    changeHandler={changeHandler}
                    blurHandler={blurHandler}
                    error={error}
                />
            );
        },
        label,
        value: defaultValue,
        valid: false,
        error: null,
        touched: false
    };
};

export const signupForm = {
    name: {
        ...createFormFieldConfig('Name', 'name', 'text'),
        validationRules: [
            requiredRule('name'),
            minLengthRule('name', 3),
            maxLengthRule('name', 8)
        ]
    },
    email: {
        ...createFormFieldConfig('Email', 'email', 'email'),
        validationRules: [requiredRule('email')]
    },
    password: {
        ...createFormFieldConfig('Password', 'password', 'password'),
        validationRules: [requiredRule('password')]
    },
    confirmPassword: {
        ...createFormFieldConfig(
            'Confirm Password',
            'confirmPassword',
            'password'
        ),
        validationRules: [passwordMatchRule()]
    }
};
