import { useRouter } from "next/router";

export const SidebarLink = ({ Icon, href, title }) => {
  const router = useRouter();
  // Function To Handle Navigate
  const handleNavigate = () => router.push(href);
  // Check If Link Is Active
  const linkIsActive =
    router.pathname.split("/")[1] === href.split("/")[1]
      ? "bg-main-light text-white"
      : "text-main-light";

  return (
    <div
      role="button"
      onClick={handleNavigate}
      className={`flex items-center gap-1 py-2 px-4 ${linkIsActive}`}>
      <Icon fontSize="large" />
      <span className="capitalize font-medium">{title}</span>
    </div>
  );
};
