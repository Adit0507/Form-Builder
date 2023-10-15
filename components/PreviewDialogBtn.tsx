import { Button } from "./ui/button";
import { MdPreview } from "react-icons/md";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

const PreviewDialogBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="gap-2">
          <MdPreview className="w-6 h-6" />
          Preview
        </Button>
      </DialogTrigger>
      
      <DialogContent className="">
        <div>
          <p>Form preview</p>
          <p>This is how your form will look to your users</p>
        </div>

        <div>
          <div>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialogBtn;
