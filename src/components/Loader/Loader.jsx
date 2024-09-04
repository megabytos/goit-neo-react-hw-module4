import { MoonLoader } from 'react-spinners';

export default function Loader() {
  return <MoonLoader size={50} cssOverride={{ margin: '10px auto' }} aria-label="Loading" />;
}
