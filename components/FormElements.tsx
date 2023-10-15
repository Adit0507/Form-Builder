import React from "react"
import { TextFieldFormElement } from "./fields/TextField"

export type ElementsType = "TextField" | "TextField"

export type FormElement = {
    type: ElementsType

    designerComponent: React.FC
    formComponent: React.FC
    propertiesComponent: React.FC
}

type FormElementsType= {
    [key in ElementsType]: FormElement
}

export const FormElement: FormElementsType= {
    TextField: TextFieldFormElement
}

