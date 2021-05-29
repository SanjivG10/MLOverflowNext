import { HOME_URL } from "../../../hooks/constants"

export const slug_placeholder = "Add an endpoint"
export const slug_tip = HOME_URL + "quicklinks/{end-point}";


export const ValidationFormAttrs = {
    "name": {
        "fieldLength": 100,
        "fieldName": "name",
        "placeholder": "enter name of your product",
        "label": "name",
    },

    "description": {
        "fieldLength": 0,
        "fieldName": "description",
        "placeholder": "description of your product. Keep it simple",
        "label": "desc",
    },
    "link": {
        "fieldLength": 100,
        "fieldName": "link",
        "placeholder": "link of your product",
        label: "link"
    },
    "slug": {
        fieldLength: 100,
        "fieldName": "url",
        "placeholder": "Add an endpoint",
        tip: HOME_URL + "quicklinks/{endpoint}"
    }
}

