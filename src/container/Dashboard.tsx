import { Box } from '@mui/material';
import { Card } from '@/components/dashboard/Card';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import ChartCard from '@/components/dashboard/ChartCard';
import TransactionsBox from '@/components/dashboard/TransactionsBox';
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/Inbox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LiveAgentBox from '@/components/dashboard/LiveAgentBox';
import { tokens, useMode } from '@/theme/theme';
import ConversationsChart from '@/components/dashboard/ConversationsChart';

interface RowOneData {
  icon: any;
  rate: number;
  title: string;
  profit: number;
}

const rowOneData: Array<RowOneData> = [
  {
    icon: (
      <QuestionAnswerIcon
        // color: colors.greenAccent[500]
        sx={{ fontSize: '2rem' }}
      />
    ),
    rate: 675,
    title: 'Conversations',
    profit: 30,
  },
  {
    icon: (
      <PersonAddIcon
        // color: colors.greenAccent[500]
        sx={{ fontSize: '2rem' }}
      />
    ),
    rate: 420,
    title: 'Users',
    profit: 15,
  },
  {
    icon: (
      <EmailIcon
        // color: colors.greenAccent[500]
        sx={{ fontSize: '2rem' }}
      />
    ),
    rate: 12046.0,
    title: 'Conversations Revenue',
    profit: 43,
  },
  {
    icon: (
      <StarIcon
        // color: colors.greenAccent[500]
        sx={{ fontSize: '2rem' }}
      />
    ),
    rate: 413,
    title: 'Reviews Received',
    profit: 26,
  },
];

interface RowTwoData {
  icon: any;
  rate: number;
  title: string;
  profit: number;
}

const rowTwoData: Array<RowTwoData> = [
  {
    icon: (
      <SendIcon
        // color: colors.greenAccent[500]
        sx={{ fontSize: '2rem' }}
      />
    ),
    rate: 3375,
    title: 'Messages Sent',
    profit: 30,
  },
  {
    icon: (
      <InboxIcon
        // color: colors.greenAccent[500]
        sx={{ fontSize: '2rem' }}
      />
    ),
    rate: 420,
    title: 'Assigned Conversations to Live agent',
    profit: 15,
  },
  {
    icon: (
      <PersonAddIcon
        // color: colors.greenAccent[500]
        sx={{ fontSize: '2rem' }}
      />
    ),
    rate: 2035,
    title: 'A.I. Quick Reply Messages',
    profit: 15,
  },
];

export default function Dashboard() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gridAutoRows='140px'
      gap='20px'
    >
      {/* ROW 1 */}
      {rowOneData.map((card, i) => {
        return (
          <Card
            key={i}
            icon={card.icon}
            rate={card.rate}
            title={card.title}
            profit={card.profit}
          />
        );
      })}

      {/* ROW 2 */}
      <ChartCard />
      <TransactionsBox />

      {/* ROW 3 */}
      {rowTwoData.map((card, i) => {
        return (
          <Card
            key={i}
            icon={card.icon}
            rate={card.rate}
            title={card.title}
            profit={card.profit}
            size='large'
          />
        );
      })}

      {/* ROW 4 */}
      <ConversationsChart />
      <LiveAgentBox />
    </Box>
  );
}
