export const required = (value) => (value ? undefined : "Required");

export const isEmail = value =>{
        const re = /\S+@\S+\.\S+/;
        return re.test(value) ? undefined: "Isn't email";
}

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
