export const USER_STATUSES = ["Active", "Suspended"] as const;
export type UserStatus = (typeof USER_STATUSES)[number];
