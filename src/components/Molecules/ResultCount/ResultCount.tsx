import Typography from "../../Atoms/Typography/Typography";
import { ResultCountContainer } from "./ResultCount.styled";

interface ResultCountProps {
  title: string;
  count: number;
}

export default function ResultCount({ title, count }: ResultCountProps) {
  return (
    <ResultCountContainer>
      <div>
        <Typography variant="body2">{title}</Typography>
      </div>
      <div>
        <Typography variant="body2">총&nbsp;</Typography>
        <Typography variant="body2" color="primary">
          {count.toLocaleString("ko-KR")}
        </Typography>
        <Typography variant="body2">건</Typography>
      </div>
    </ResultCountContainer>
  );
}
