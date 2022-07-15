/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{variant: 'links.logo',}}>
      <h2>Siham Tech</h2>
    </Link>
  );
}
