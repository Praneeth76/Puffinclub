import React from "react";

const orders = [
  {
    id: "ORD-001",
    date: "January 15, 2024",
    status: "Delivered",
    total: "$267.84",
    statusColor: "text-green-400",
    items: [
      {
        name: "Essential Tee",
        size: "M",
        quantity: 1,
        price: "$89",
        image:
          "https://images.femmeconnection.com.au/products/roxy-crop-blazer-jacket-j505947-navy-200--v1-original.jpg",
      },
      {
        name: "Wide Leg Trousers",
        size: "L",
        quantity: 1,
        price: "$189",
        image:
          "https://argentwork.com/cdn/shop/files/32_Wide_Leg_Trouser_in_Seasonless_Wool_Black_2971_640x.jpg?v=1725238895",
      },
    ],
    actions: ["View Details", "Reorder"],
  },
  {
    id: "ORD-002",
    date: "January 8, 2024",
    status: "In Transit",
    total: "$355.32",
    statusColor: "text-blue-400",
    items: [
      {
        name: "Structured Blazer",
        size: "S",
        quantity: 1,
        price: "$329",
        image:
          "https://media.istockphoto.com/id/2198942459/photo/stylish-brown-and-beige-suede-coats-hanging-on-a-modern-clothing-rack-in-a-fashion-forward.webp?a=1&b=1&s=612x612&w=0&k=20&c=TiFJaQQWZ0gYbu9tl1xpa8znSif7dT0aL9uqVHb4lQI=",
      },
    ],
    actions: ["View Details", "Track Order"],
  },
  {
    id: "ORD-003",
    date: "January 2, 2024",
    status: "Processing",
    total: "$301.32",
    statusColor: "text-yellow-400",
    items: [
      {
        name: "Silk Slip Dress",
        size: "M",
        quantity: 1,
        price: "$279",
        image:
          "https://i.etsystatic.com/48010725/r/il/e640da/6652703780/il_340x270.6652703780_ld7y.jpg",
      },
      {
        name: "Leather Boots",
        size: "M",
        quantity: 1,
        price: "$179",
        image: "https://m.media-amazon.com/images/I/71odjI6rrkL._AC_SY695_.jpg",
      },
    ],
    actions: ["View Details"],
  },
];

const Orders = () => {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white py-16 px-6 md:px-20">
      <h1 className="text-4xl font-semibold text-center mb-12 tracking-wider">
        YOUR ORDERS
      </h1>
      <div className="space-y-10">
        {orders.map((order) => (
          <div key={order.id} className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-gray-400 text-sm">Placed on {order.date}</p>
              </div>
              <div className="text-right">
                <p className={`${order.statusColor} font-medium`}>
                  {order.status}
                </p>
                <p className="text-white font-semibold">{order.total}</p>
              </div>
            </div>

            <div className="space-y-4 mb-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">
                      Size: {item.size} • Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {order.actions.map((action, idx) => (
                <button
                  key={idx}
                  className="border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition rounded"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
