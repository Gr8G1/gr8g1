import Syntax from '@/components/template/Syntax';

interface Props extends ReactProps {
  code: string;
}

function Gen({ code }: Props) {
  return (
    <Syntax code={code} />
  );
}

export default Gen;
