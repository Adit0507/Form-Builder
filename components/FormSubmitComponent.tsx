"use client";

import React, { useCallback, useRef, useState, useTransition } from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { Button } from "./ui/button";
import { HiCursorClick } from "react-icons/hi";
import { toast } from "./ui/use-toast";
import { ImSpinner2 } from "react-icons/im";


const FormSubmitComponent = ({
  formUrl,
  content,
}: {
  formUrl: string;
  content: FormElementInstance[];
}) => {
    const formValues = useRef<{[key: string]: string}>({})
    const formErrors = useRef<{[key: string]: boolean}>({})

    const submitValue = useCallback((key: string, value: string) => {
        formValues.current[key] = value
    }, [])

    const submitForm= async() =>{
        
    }
 
  return (
    <div className="flex justify-center w-full h-full items-center p-8">
      <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-xl shadow-blue-700 rounded">
        {content.map((element) => {
          const FormElement = FormElements[element.type].formComponent;
          return <FormElement key={element.id} elementInstance={element} submitValue={submitValue} />;
        })}

        <Button className="mt-8" onClick={() => {
            submitForm()
        }} >
          <HiCursorClick className="mr-2" />
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormSubmitComponent;
