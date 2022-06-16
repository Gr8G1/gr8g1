import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props extends ReactProps {
  language?: 'javascript' | string
  codes: string;
}

export default ({ codes, language = 'javascript' }: Props) => {
  return (
    <SyntaxHighlighter wrapLines showLineNumbers language={language} style={oneDark}>
      {codes}
    </SyntaxHighlighter>
  );
};
