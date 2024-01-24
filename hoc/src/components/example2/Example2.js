import PostComponent from "./PostComponent"
import withBorder from "../hoc/withBorder"
import withDataFetch from "../hoc/withDataFetch"

const PostComponentWithDataFetch = withDataFetch(PostComponent)
const PostComponentWithDataFetchWithBorder = withBorder(PostComponentWithDataFetch)

const Example2 = () => {
  return (
    <div>
      <PostComponentWithDataFetchWithBorder />
    </div>
  )
}

export default Example2
