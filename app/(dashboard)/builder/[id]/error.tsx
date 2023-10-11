"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-4">
      <h2 className="text-destructive text-4xl">somethin went wrong!</h2>
      <Button asChild>
        <Link href={`/`}>Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
