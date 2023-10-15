import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { MdOutlinePublish } from "react-icons/md";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const PublishFormBtn = ({ id }: { id: number }) => {
  const [loading, startTransition] = useTransition();

  return <div>PublishFormBtn</div>;
};

export default PublishFormBtn;
