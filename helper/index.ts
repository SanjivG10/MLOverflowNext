import { ParsedUrlQuery } from "querystring";

function commonKeys(a: any, b: any) {
    return Object.keys(a).filter(function (key) {
        return b.hasOwnProperty(key);
    });
};

export const getUniqueValues = (allResults: any) => {
    const resultToPublish: any[] = [];
    const idsList: number[] = [];
    allResults.filter((item: any) => {
        if (!idsList.includes(item.id)) {
            resultToPublish.push(item);
        } else {
            idsList.push(item.id);
        }
    });

    return resultToPublish;
}

export const getNewQuery = (queryParams: ParsedUrlQuery, newQueryParams: any) => {
    let allParams = { ...queryParams, ...newQueryParams };
    const keysCommon = commonKeys(queryParams, newQueryParams);
    for (const key of keysCommon) {
        if (queryParams[key] === newQueryParams[key])
            delete allParams[key];
    }
    return allParams;
}

export const getParameterByName = (name: string, url: string) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const removeURLParameter = (url: string, parameter: string) => {
    const urlparts = url.split('?');
    if (urlparts.length >= 2) {

        const prefix = encodeURIComponent(parameter) + '=';
        const pars = urlparts[1].split(/[&;]/g);

        for (var i = pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }
        url = urlparts[0] + '?' + pars.join('&');
        return url;
    } else {
        return url;
    }
}

export const getFilterURL = (filter: string) => {
    if (
        filter === "tensorflow" ||
        filter === "pytorch" ||
        filter === "scikit-learn" ||
        filter === "caffe" ||
        filter === "others"
    ) {
        return { language: filter }
    } else if (filter === "latest" || filter === "oldest") {
        return { order: filter }
    } else if (filter === "bookmarked") {
        return { bookmark: "true" }
    } else if (filter === "vote up") {
        return { vote: "true" }
    }

    return {};
}

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