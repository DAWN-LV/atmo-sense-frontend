import Page from "@/components/Page"
import ReactMarkdown from 'react-markdown'

import content from '@/pages/documentation/markdown/DOCS.md?raw'

const DocumentationPage: React.FC = () => (
  <Page breadcrumb={ [ 'documentation' ] }>
    <ReactMarkdown className="prose dark:prose-invert prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
      { content }
    </ReactMarkdown>
  </Page>
)

export default DocumentationPage