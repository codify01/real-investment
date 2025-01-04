import React from "react";
import { IoNotificationsOutline, IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";

const notifications = [
  {
    id: 1,
    title: "Deposit Successful",
    message: "Your deposit of $1,000 was successfully processed.",
    date: "Dec 5, 2024",
    type: "success",
  },
  {
    id: 2,
    title: "Withdrawal Pending",
    message: "Your withdrawal request of $500 is under review.",
    date: "Dec 4, 2024",
    type: "warning",
  },
  {
    id: 3,
    title: "Investment Update",
    message: "Your investment portfolio has grown by 5% this month.",
    date: "Dec 3, 2024",
    type: "info",
  },
];

const NotificationPage: React.FC = () => {
  return (
    <div className="min-h-screen text-pry py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Notifications</h1>
        <IoNotificationsOutline className="text-4xl text-pry" />
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start space-x-4 p-4 rounded-lg shadow-md bg-sec ${
              notification.type === "success"
                ? "border-l-4 border-green-500"
                : notification.type === "warning"
                ? "border-l-4 border-yellow-500"
                : "border-l-4 border-blue-500"
            }`}
          >
            {/* Notification Icon */}
            <div>
              {notification.type === "success" && (
                <IoCheckmarkCircle className="text-green-500 text-2xl" />
              )}
              {notification.type === "warning" && (
                <IoAlertCircle className="text-yellow-500 text-2xl" />
              )}
              {notification.type === "info" && (
                <IoNotificationsOutline className="text-blue-500 text-2xl" />
              )}
            </div>

            {/* Notification Content */}
            <div>
              <h2 className="text-lg font-medium">{notification.title}</h2>
              <p className="text-sm text-pry/80">{notification.message}</p>
              <p className="text-xs text-pry/50 mt-1">{notification.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-pry/70">
          You're up to date! New notifications will appear here.
        </p>
      </div>
    </div>
  );
};

export default NotificationPage;
