import { ReactNode } from 'react';
import { Typography, Breadcrumbs as BreadcrumbsBox } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Props {
  links: any;
}

export default function Breadcrumbs(props: Props) {
  const { links } = props;

  return (
    <BreadcrumbsBox
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
    >
      {links.map((link: string) => {
        return (
          <Typography key='1' color='inherit'>
            {link}
          </Typography>
        );
      })}
    </BreadcrumbsBox>
  );
}
