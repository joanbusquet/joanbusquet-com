import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import PostHeader from "./PostHeader/PostHeader"
import classes from "./PostContent.module.css"

import Image from "next/image"

// Load Light version of Syntax Highlighter because the full is too big to build optimal application
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
// Load only the languages which will be inside code boxes
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"
// Register the languages. First param from md file: ```js or ```css. Second param: imported language
SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("css", css)

export default function PostContent({ post }) {
  // https://github.com/remarkjs/react-markdown
  const customRederers = {
    // IMAGE: Override paragraphs <p></p> when the children is an Image because with NextJS Image automatically creates <div> inside <p> and throw console.error.
    paragraph(paragraph) {
      // Get node (content iside paragraph)
      const { node } = paragraph

      // If the first content of a paragraph is an image
      if (node.children[0].type === "image") {
        // Get first child
        const image = node.children[0]
        // Return a div with an Image (NextJS Image component)
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
        // If the first content of a paragraph is not an image
      } else {
        // Return normal paragraph
        return <p>{paragraph.children}</p>
      }
    },
    // CODE: https://github.com/react-syntax-highlighter/react-syntax-highlighter
    // npm install react-syntax-highlighter
    code({ language, value }) {
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          className={classes.code}
        >
          {value}
        </SyntaxHighlighter>
      )
    },
  }
  return (
    <article className={classes.content}>
      <PostHeader post={post} />
      <ReactMarkdown renderers={customRederers}>{post.content}</ReactMarkdown>
    </article>
  )
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,

  language: PropTypes.string,
  value: PropTypes.string,
}
