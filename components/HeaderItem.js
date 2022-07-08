
export default function HeaderItem ({ Icon, title }) {
  return (
    <header className='text-gray-400'>
      <div>
        <Icon />
      </div>
      <h1 className='font-bold underline'>{title}</h1>
    </header>
  );
}
