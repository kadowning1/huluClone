import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { GiftIcon, HomeIcon } from '@heroicons/react/solid'
export default function Header () {
  return (
    <header className=''>
      <div>
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title={'Shows'} Icon={GiftIcon} />
      </div>
      <Image className='object-contain' src={'https://links.papareact.com/ua6'} width={200} height={100} />

    </header>
  );
}
