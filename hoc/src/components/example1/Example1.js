import withHover from "../hoc/withHover";
import TextComponent from "./TextComponent";
import InputComponet from "./InputComponet";

const TextComponentWithHover = withHover(TextComponent)
const InputComponetWithHover = withHover(InputComponet)

const Example1 = () => {
  return (
    <div>
      <TextComponentWithHover text='Text Component With Hover' />
      <InputComponetWithHover type='text' />
    </div>
  )
}

export default Example1
