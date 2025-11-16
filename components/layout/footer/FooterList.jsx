import Link from "next/link";

export const FooterList = ({ headline, list }) => {
  return (
    <ul className="flex flex-col items-center gap-4 xl:items-start">
      {/* List Headline */}
      <li className="capitalize font-bold text-xl">{headline}</li>
      {/* Items Contain Some Links Coming From List Props  */}
      {list.map((item, index) => (
        <li key={index} className="capitalize text-base">
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
