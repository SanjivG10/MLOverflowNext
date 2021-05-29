
export const textLimit = (text: string, limit: number = 20) => {
    if (text) {
        if (text.length > limit)
            return text.substring(0, limit) + " ...";
        return text.substring(0, text.length);
    } else return "";
};

export const isEmpty = (obj: any) => {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
};

export const copyText = (valueToCopy: string) => {
    const el = document.createElement("textarea");
    el.value = valueToCopy;
    el.setAttribute("readonly", "");
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}