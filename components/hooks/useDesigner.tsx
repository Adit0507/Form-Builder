"use client"

import { useContext } from "react"
import { DesignerContext } from "../context/DesignerContext"

const useDesigner = () => {
    const context = useContext(DesignerContext)

    if(!context){
        throw new Error("useDesigner must be used within DesignerContext")
    }

    return context
}

export default useDesigner