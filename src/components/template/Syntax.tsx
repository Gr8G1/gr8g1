import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './Syntax.scss';

interface Props extends ReactProps {
  code: string;
  language?: 'javascript' | string
}

export default ({ code, language = 'javascript' }: Props) => {
  return (
    // showLineNumbers
    // wrapLines
    <SyntaxHighlighter style={oneDark} language={language}>
      {code}
    </SyntaxHighlighter>
  );
};
