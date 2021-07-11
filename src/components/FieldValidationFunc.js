export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const validateName = (name) => {
    const re = /^[A-zА-яЁё ]+$/;
    return re.test(name);
}

export const validatePassword = (str) => {
    if (str.length < 6) {
        return([false, "Пароль должен содержать как минимум 6 символов"]);
    } else if (str.length > 50) {
        return([false, "Пароль не должен быть длинее 50 символов"]);
    } else if (str.search(/\d/) == -1) {
        return([false, "Пароль должен содержать хотя бы 1 число"]);
    } else if (str.search(/[a-zА-яЁё]/) == -1) {
        return([false, "Пароль должен содержать хотя бы 1 букву"]);
    }

    return([true, ""]);
}