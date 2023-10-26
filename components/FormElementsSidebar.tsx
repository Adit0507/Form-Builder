import { FormElements } from "./FormElements"
import SidebarBtnElement from "./SidebarBtnElement"
import { Separator } from "./ui/separator"

const FormElementsSidebar = () => {
  return (
    <div>
        <p>Drag and Drop elements</p>
      <div>
      <p>Layout elements</p>
      <SidebarBtnElement formElement={FormElements.TextField} />
      <SidebarBtnElement formElement={FormElements.TitleField} />
      </div>
    </div>
  )
}

export default FormElementsSidebar