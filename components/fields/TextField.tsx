"use client"

import { ElementsType, FormElement } from "../FormElements"
import { MdTextFields } from "react-icons/md"

const type: ElementsType = "TextField"

const extraAttributes= {}

export const TextFieldFormElement: FormElement= {
    type,
    construct: (id: string)=> ({
        id, 
        type,
        extraAttributes: {
            label: "Text Field",
            helperText: "Helper Text",
            required: false,
            placeholder: "Value here..."
        }
    }),

    designerBtnElement: {
        icon:MdTextFields,
        label: "Text Field"
    },

    designerComponent: ()=> <div>DD</div>,
    formComponent: ()=> <div>hh</div>,
    propertiesComponent: ()=> <div>PPP</div>

}