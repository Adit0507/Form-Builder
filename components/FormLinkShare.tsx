"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImShare } from "react-icons/im";
import { toast } from "./ui/use-toast";

const FormLinkShare = ({ shareUrl }: { shareUrl: string }) => {
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-grow gap-4 items-center">
      <Input value={shareLink} readOnly />
      <Button
        className="w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
            title: "Copied !",
            description: "Link copied to the clipboard",
          });
        }}
      >
        <ImShare className="mr-2 w-4 h-4" />
        Share Link
      </Button>
    </div>
  );
};

export default FormLinkShare;
