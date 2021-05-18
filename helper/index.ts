
export const textLimit = (text: string, limit: number = 20) => {
    if (text) {
        if (text.length > limit)
            return text.substring(0, limit) + " ...";
        return text.substring(0, text.length);
    } else return "";
};