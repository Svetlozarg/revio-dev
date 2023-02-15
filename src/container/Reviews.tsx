import SelectTable, {
  createData,
} from '@/components/global/tables/select/SelectTable';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';

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
    id: 'review',
    numeric: false,
    disablePadding: false,
    label: 'Review',
  },
  {
    id: 'imageVideo',
    numeric: false,
    disablePadding: false,
    label: 'Image/Video',
  },
  {
    id: 'reviews',
    numeric: false,
    disablePadding: false,
    label: 'Reviews',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date',
  },
];

const rows = [
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Oana Buzatu',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 5.00',
    '01.01.2023',
    ''
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Krum Ognianov',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 5.00',
    '01.02.2023',
    ''
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Despina Maria',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 2.00',
    '01.03.2023',
    ''
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Vlad Negrau',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 1.00',
    '01.04.2023',
    ''
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Mikko Kaarela',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 3.00',
    '01.05.2023',
    ''
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Valeri Duchev',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 4.00',
    '01.06.2023',
    ''
  ),
];

export default function Reviews() {
  return <SelectTable rows={rows} headCells={headCells} />;
}
