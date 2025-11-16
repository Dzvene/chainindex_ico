import Link from "next/link";
export const Logo = ({ color = "text-pink-600" }) => {
  return (
    <>

<Link href="/">
       <h1 className="capitalize font-bold flex flex-col text-2xl space-y-2 items-center md:items-start">

      <span className={`${color}`}>Ico</span> Marketplace
     
 
    </h1>
    </Link>
    </>
 
  );
};
