import { Moment } from "moment";

const errorHandler = (field: string, type: string) => {
    switch (type) {
        case "missing":
            return `${field} field is missing`;
        default:
            return "Something went wrong"
    }

};


const isEmpty = (text: string | undefined) => {
    if (text) {
        return text.trim() === "" || text.trim().length === 0;
    }
    return false;
};


export const formValidator = (field: string, text: string) => {
    let error = "";
    if (!text) {
        error = errorHandler(field, "missing");
        return error;
    }

    if (isEmpty(text)) {
        error = errorHandler(field, "missing");
        return error;
    }
};

export const formValidatorDate = (field: string, date: Moment | null) => {
    if (!date) {
        return `${field} cannot be empty`;
    }
};

export const formValidatorList = (field: string, list: { name: string }[]) => {
    if (!list) {
        return `${field} cannot be empty`;
    } else {
        if (!list.length) {
            return `${field} cannot be empty`;
        }
        for (const element of list) {
            if (!element.name) {
                return `${field} cannot be empty`;
            }
        }
    }
};
