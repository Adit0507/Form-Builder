import FormBuilder from "@/components/FormBuilder";
import { GetFormById } from "@/actions/form";

async function BuilderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
    const {id} = params
    const form = await GetFormById(Number(id))

    if(!form){
        throw new Error("form not found")
    } 

  return <FormBuilder form={form} />;
}

export default BuilderPage;
