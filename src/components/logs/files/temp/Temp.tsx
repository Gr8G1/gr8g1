import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import 'github-markdown-css';
import './Temp.scss';
interface Props extends ReactProps {
  markdown: string;
}

function File({ markdown }: Props) {
  return (
    <div className='markdown-body'>
      <ReactMarkdown
        remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default File;
