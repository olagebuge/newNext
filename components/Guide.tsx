import Image from "next/image"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt="camp" 
          width={24} 
          height={24} 
        />
      </div>
    </section>
  )
}

export default Guide