import { GetFormContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/components/FormElements";

async function SubmitPage({params}: {params: {
    formUrl: string
}}) {
    const form = await GetFormContentByUrl(params.formUrl)

    if(!form){
        throw new Error("form not found")
    }

    const formContent = JSON.parse(form.content) as FormElementInstance[]

  return (
    <div>page</div>
  )
}


export default SubmitPage;
