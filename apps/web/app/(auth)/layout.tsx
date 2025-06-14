import Image from 'next/image';
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="w-screen h-screen flex justify-center items-center">
    <div className="border border-white w-[60vw] h-[70vh] rounded-2xl flex p-3">
      <div className="bg-white h-full w-[30vw] rounded-2xl"/>
      {/* <Image src="/b.jpg" alt="A description of the image" className='w-[35vw] h-full rounded-lg' width={4000} height={4000}/> */}
      {/* <img src="" alt="" className="bg-white h-full w-[30vw] rounded-2xl"/> */}
      <div className="w-[30vw] rounded-2xl ml-2">
        {children}
      </div>
    </div>
  </div>
}