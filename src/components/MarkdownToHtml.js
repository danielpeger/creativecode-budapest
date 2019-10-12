import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

export default function(content) {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(content)
    .toString()
}
