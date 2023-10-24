import FormBuilder from "@/components/FormBuilder";
import { GetFormById } from "@/actions/form";

async function BuilderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error("form not found");
  }

  const {visits, submissions} = form
  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;
  return <>Details</>;
}

export default BuilderPage;
