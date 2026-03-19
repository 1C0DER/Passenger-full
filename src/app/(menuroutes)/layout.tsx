// src/app/(dashboard-layout)/layout.tsx
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<div className="h-screen flex">
  <div className="min-w-[64px] lg:min-w-[200px] bg-[rgba(39,171,107,1)] p-[21px]">
    <div className="items-center justify-center lg:justify-start gap-2">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <span className="hidden text-[28px] lg:block text-white font-medium">Passenger</span>
        <Image src="/notif.png" alt="logo" width={40} height={40} />
      </Link>
      <Menu />
    </div>
  </div>
  <div className="flex-1 bg-[rgba(248,244,251,1)] overflow-scroll">
    {children}
  </div>
</div>
);
}
