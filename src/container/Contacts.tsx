import SelectTable, {
  createData,
} from '@/components/global/tables/select/SelectTable';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const headCells: Array<Object> = [
  {
    id: 'avatar',
    numeric: false,
    disablePadding: true,
    label: 'Avatar',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'channel',
    numeric: false,
    disablePadding: false,
    label: 'Channels',
  },
  {
    id: 'totalOrder',
    numeric: false,
    disablePadding: false,
    label: 'Total Orders',
  },
  {
    id: 'reviews',
    numeric: false,
    disablePadding: false,
    label: 'Reviews',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'subscribed',
    numeric: false,
    disablePadding: false,
    label: 'Subscribed',
  },
];

const rows = [
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Oana Buzatu',
    'Viber',
    '7 orders / $1 225.00',
    '(5) / 5.00',
    'Subscribed',
    'Today'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Krum Ognianov',
    'Messenger',
    '2 orders / $205.00',
    '(5) / 5.00',
    'Subscribed',
    '2 days ago'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Maria Donca',
    'Viber',
    '3 orders / $205.00',
    '(2) / 4.50',
    'Subscribed',
    '4 days ago'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Vlad Negrau',
    'WhatsApp',
    '3 orders / $405.00',
    '(2) / 4.60',
    'Subscribed',
    '5 days ago'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Mikko Laarela',
    'Viber',
    '2 orders / $316.00',
    '(2) / 5.00',
    'Subscribed',
    '1 week ago'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Valeri Duchev',
    'Messenger',
    '7 orders / $1 450.00',
    '(7) / 4.50',
    'Subscribed',
    '2 weeks ago'
  ),
];

export default function Contacts() {
  return <SelectTable rows={rows} headCells={headCells} />;
}
