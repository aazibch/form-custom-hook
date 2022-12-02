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
            requiredRule('Name'),
            minLengthRule('Name', 3),
            maxLengthRule('Name', 8)
        ]
    },
    email: {
        ...createFormFieldConfig('Email', 'email', 'email'),
        validationRules: [requiredRule('Email')]
    },
    password: {
        ...createFormFieldConfig('Password', 'password', 'password'),
        validationRules: [requiredRule('Password')]
    },
    confirmPassword: {
        ...createFormFieldConfig(
            'Confirm Password',
            'confirmPassword',
            'Password'
        ),
        validationRules: [passwordMatchRule()]
    }
};
