import { stat } from "fs";

export let role = "admin";

export const userTableData = {
users: [
{
    name: "John Doe",
    issueType: "john23@gmail.com",
    description: "08023765482",
    actions: "/moredot.png"
},
{
    name: "John Doe",
    issueType: "john23@gmail.com",
    description: "08023765482",
    actions: "/moredot.png"
},
{
    name: "John Doe",
    issueType: "john23@gmail.com",
    description: "08023765482",
    actions: "/moredot.png"
},
{
    name: "John Doe",
    issueType: "john23@gmail.com",
    description: "08023765482",
    actions: "/moredot.png"
},
{
    name: "John Doe",
    issueType: "john23@gmail.com",
    description: "08023765482",
    actions: "/moredot.png"
}
]
};

export const MangTableData = {
users: [
{
    id: 1,
    name: "John Doe",
    emailAddress: "john23@gmail.com",
    phoneNumber: "08023765482",
    Status: "Active",
    actions: "/moredot.png"
},
{
    id: 2,
    name: "John Doe",
    emailAddress: "john23@gmail.com",
    phoneNumber: "08023765482",
    Status: "Active",
    actions: "/moredot.png"
},
{
    id: 3,
    name: "John Doe",
    emailAddress: "john23@gmail.com",
    phoneNumber: "08023765482",
    Status: "Suspended",
    actions: "/moredot.png"
},
{
    id: 4,
    name: "John Doe",
    emailAddress: "john23@gmail.com",
    phoneNumber: "08023765482",
    Status: "Active",
    actions: "/moredot.png"
},
{
    id: 5,
    name: "John Doe",
    emailAddress: "john23@gmail.com",
    phoneNumber: "08023765482",
    Status: "Active",
    actions: "/moredot.png"
}
]
};

export const DelivTableData = {
users: [
{
    parcelType: "Small",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "In Transit",
},
{
    parcelType: "Large",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "Delivered",
},
{
    parcelType: "Small",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "In Transit",
},
{
    parcelType: "Large",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "Delivered",
},
{
    parcelType: "Large",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "Delivered",
},
{
    parcelType: "Large",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "Delivered",
},
{
    parcelType: "Large",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "Delivered",
},
{
    parcelType: "Small",
    route: "Jos -> Abuja",
    traveler: "John Doe",
    deliveryFee: "N2,000",
    serviceFee: "N500",
    date: "09/02/2025",
    status: "In Transit",
},
]
};

export const OngDelivData = {
users: [
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
]
};

export const TransacTableData = {
users: [
{
    user: "John Doe",
    transactionType: "Small",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
},
{
    user: "John Doe",
    transactionType: "Large",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
},
{
    user: "John Doe",
    transactionType: "Small",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
},
{
    user: "John Doe",
    transactionType: "Large",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
},
{
    user: "John Doe",
    transactionType: "Large",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
},
{
    user: "John Doe",
    transactionType: "Large",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
},
{
    user: "John Doe",
    transactionType: "Large",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
},
{
    user: "John Doe",
    transactionType: "Small",
    amount: "N2,000",
    date: "09/02/2025",
    time: "8:00AM"
}
]
};

export const RefundTableData = {
users: [
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Small",
    date: "Cancelled Trip",
    time: "8:00AM"
},
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Large",
    date: "Cancelled Trip",
    time: "8:00AM"
},
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Small",
    date: "Cancelled Trip",
    time: "8:00AM"
},
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Large",
    date: "Cancelled Trip",
    time: "8:00AM"
},
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Large",
    date: "Cancelled Trip",
    time: "8:00AM"
},
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Large",
    date: "Cancelled Trip",
    time: "8:00AM"
},
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Large",
    date: "Cancelled Trip",
    time: "8:00AM"
},
{
    user: "John Doe",
    amount: "N2,000",
    reason: "Small",
    date: "Cancelled Trip",
    time: "8:00AM"
}
]
};

export const TransacFeeData = {
users: [
{
    feeType: "Base",
    amount: "N500",
    minimumCap: "--",
    maximumCap: "--",
    actions: "/moredot.png"
},
{
    feeType: "Percentage",
    amount: "5%",
    minimumCap: "N100",
    maximumCap: "N1,000,000",
    actions: "/moredot.png"
},
{
    feeType: "Base",
    amount: "N500",
    minimumCap: "--",
    maximumCap: "--",
    actions: "/moredot.png"
}
]
};

export const EscrowPoliciesData = {
users: [
{
    policyName: "Auto-release",
    type: "Time Based",
    releaseTime: "48hrs",
    actions: "/moredot.png"
},
{
    policyName: "Recipient Confirmation",
    type: "Confirmation Based",
    releaseTime: "--",
    actions: "/moredot.png"
}
]
};

export const TAndDData = {
users: [
{
    version: "v1.0",
    lastUpdated: "Jan 10,2024",
    status: "Draft",
    actions: "/moredot.png"
},
{
    version: "v1.1",
    lastUpdated: "Feb 1,2024",
    status: "Published",
    actions: "/moredot.png"
},
{
    version: "v2.0",
    lastUpdated: "Mar 10,2024",
    status: "Published",
    actions: "/moredot.png"
}
]
};

export const PrivacyPolicyData = {
users: [
{
    version: "v1.0",
    lastUpdated: "Jan 10,2024",
    status: "Draft",
    actions: "/moredot.png"
},
{
    version: "v1.1",
    lastUpdated: "Feb 1,2024",
    status: "Published",
    actions: "/moredot.png"
},
{
    version: "v2.0",
    lastUpdated: "Mar 10,2024",
    status: "Published",
    actions: "/moredot.png"
}
]
};

export const RealtimeOngDelivData = {
users: [
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
},
{
    liveLocation: "Keffi, Nasarawa",
    route: "Jos -> Abuja",
    deliveryFee: "N2,000",
    sender: "John Doe",
    traveler: "Jane Doe",
    noOfChekIns: "2"
}
]
};

export const AdminRoleData = {
users: [
{
    adminRole: "Sales & Marketing",
    noOfTeamMemebers: "5",
    actions: "/moredot.png"
},
{
    adminRole: "Customer Support",
    noOfTeamMemebers: "8",
    actions: "/moredot.png"
},
{
    adminRole: "Operations",
    noOfTeamMemebers: "2",
    actions: "/moredot.png"
}
]
};

export const TeamTableData = {
users: [
{
    role: "Marketing Manager",
    name: "John Doe",
    issueType: "john@gmail.com",
    actions: "/moredot.png"
},
{
    role: "Market Researcher",
    name: "Jane Doe",
    issueType: "jane@gmail.com",
    actions: "/moredot.png"
},
{
    role: "Content Marketer",
    name: "David Doe",
    issueType: "david@gmail.com",
    actions: "/moredot.png"
}
]
};

export const suspiciousActivitiesData = {
users: [
{
    name: "John Doe",
    issueType: "john@gmail.com",
    description: "08076534218",
    actions: "/moredot.png"
},
{
    name: "John Doe",
    issueType: "john@gmail.com",
    description: "08076534218",
    actions: "/moredot.png"
},
{
    name: "John Doe",
    issueType: "john@gmail.com",
    description: "08076534218",
    actions: "/moredot.png"
}
]
};

export const AdminLoginsData = {
users: [
{
    name: "John Doe",
    dateTime: "Feb 11, 2025, 14:05",
    ipAddress: "192.168.1.2",
    deviceInfo: "Chrome, Windows",
    location: "Lagos, Nigeria"
},
{
    name: "John Doe",
    dateTime: "Feb 11, 2025, 14:05",
    ipAddress: "192.168.1.2",
    deviceInfo: "Safari, iphone",
    location: "Lagos, Nigeria"
},
{
    name: "John Doe",
    dateTime: "Feb 11, 2025, 14:05",
    ipAddress: "192.168.1.2",
    deviceInfo: "Firefox, MacOS",
    location: "Lagos, Nigeria"
}
]
};

export const AdminActionsData = {
users: [
{
    name: "John Doe",
    dateTime: "Feb 11, 2025, 14:05",
    actionTaken: "Edited Transaction Fee",
    affectedSection: "System Settings",
    ipAddress: "192.168.1.2"
},
{
    name: "John Doe",
    dateTime: "Feb 11, 2025, 14:05",
    actionTaken: "Created Escrow Policy",
    affectedSection: "System Settings",
    ipAddress: "192.168.1.2"
},
{
    name: "John Doe",
    dateTime: "Feb 11, 2025, 14:05",
    actionTaken: "Deleted a User Account",
    affectedSection: "Users",
    ipAddress: "192.168.1.2",
}
]
};

export const NotificaionsData = {
users: [
{
    date: "12/02/2025",
    time: "10:00 AM",
    type: "Push",
    audience: "All Users",
    status: "Scheduled",
    actions: "/moredot.png"
},
{
    date: "12/02/2025",
    time: "10:00 AM",
    type: "Email",
    audience: "Tier-1 users",
    status: "Sent",
    actions: "/moredot.png"
},{
    date: "12/02/2025",
    time: "10:00 AM",
    type: "InApp",
    audience: "Tier-2 users",
    status: "Sent",
    actions: "/moredot.png"
}
]
};

export const SupportChatData = {
chats: [
    {
    id: 1,
    name: "John Doe",
    message: "Message content.........",
    status: "Unresolved",
    time: "10m ago",
    avatar: "/avatar1.png",
    online: true
},
{
    id: 2,
    name: "John Doe",
    message: "Message content.........",
    status: "Unresolved",
    time: "10m ago",
    avatar: "/avatar2.png",
    online: true
},
{
    id: 3,
    name: "John Doe",
    message: "Message content.........",
    status: "Unresolved",
    time: "10m ago",
    avatar: "/avatar3.png",
    online: true
},
{
    id: 4,
    name: "John Doe",
    message: "Message content.........",
    status: "Unresolved",
    time: "10m ago",
    avatar: "/avatar4.png",
    online: false
},
{
    id: 5,
    name: "John Doe",
    message: "Message content.........",
    status: "Unresolved",
    time: "10m ago",
    avatar: "/avatar5.png",
    online: false
},
{
    id: 6,
    name: "John Doe",
    message: "Message content.........",
    status: "Resolved",
    time: "10m ago",
    avatar: "/avatar6.png",
    online: false
},
{
    id: 7,
    name: "John Doe",
    message: "Message content.........",
    status: "Resolved",
    time: "10m ago",
    avatar: "/avatar7.png",
    online: false
},
{
    id: 8,
    name: "John Doe",
    message: "Message content.........",
    status: "Resolved",
    time: "10m ago",
    avatar: "/avatar8.png",
    online: false
}
]
};
