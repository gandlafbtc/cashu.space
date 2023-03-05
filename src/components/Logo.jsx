import Image from 'next/image'

export function Logo(props) {
  return (
    <span className="font-display flex w-full flex-row items-center text-2xl font-bold text-slate-900 dark:text-zinc-100 md:items-baseline md:text-3xl">
      <Image
        src="/mstile-150x150.png"
        className="mr-2 w-10 md:w-10"
        width="40"
        height="40"
        alt="Cashu.space"
      />
      <span className="my-auto">Cashu.space</span>
    </span>
  )
}
