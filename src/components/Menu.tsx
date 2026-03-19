"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
{
items: [
    { icon: "/dashboard.png", iconActive: "/dashboard-green.png", label: "Dashboard", href: "/dashboard" },
    { icon: "/users.png", iconActive: "/users-green.png", label: "Users", href: "/usersmanagement" },
    { icon: "/deliveries.png", iconActive: "/deliveries-green.png", label: "Deliveries", href: "/deliveriesmanagement" },
    { icon: "/transactions.png", iconActive: "/transactions-green.png", label: "Transactions", href: "/transactionsmanagement" },
    { icon: "/chat.png", iconActive: "/chat-green.png", label: "Chat", href: "/chat" },
    { icon: "/support.png", iconActive: "/support-green.png", label: "Support", href: "/support" },
    { icon: "/settings.png", iconActive: "/settings-green.png", label: "System Settings", href: "/systemsettings" },
    { icon: "/security1.png", iconActive: "/security-green.png", label: "Security", href: "/security" },
    { icon: "/monitoring.png", iconActive: "/monitoring-green.png", label: "Real-time Monitoring", href: "/realtimemonitoring" },
    { icon: "/notifications.png", iconActive: "/notifications-green.png", label: "Notifications", href: "/notifications" },
],
},
];

const Menu = () => {
const pathname = usePathname();
const [hoveredItem, setHoveredItem] = useState<string | null>(null);

return (
<div className="mt-4 text-white text-[16px]">
    {menuItems.map((section, i) => (
    <div key={i} className="flex flex-col gap-2">
        {section.items.map((item) => {
        const isActive = pathname === item.href;
        const isHovered = hoveredItem === item.label;
        const iconSrc = isActive || isHovered ? item.iconActive : item.icon;
        const textColor = isActive || isHovered ? "text-[rgba(39,171,107,1)]" : "text-white";

        return (
            <Link
            href={item.href}
            key={item.label}
            className={`flex items-center justify-center lg:justify-start gap-4 p-2.5 rounded-md ${isActive ? "bg-white" : ""} hover:bg-white`}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Image src={iconSrc} alt={item.label} width={24} height={24} className="w-6 h-6 object-contain" />
            <span className={`hidden lg:block font-medium ${textColor}`}>{item.label}</span>
            </Link>
        );
        })}
    </div>
    ))}
</div>
);
};

export default Menu;
