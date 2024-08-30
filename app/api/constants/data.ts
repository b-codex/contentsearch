import { ReactNode } from "react";

export type DataSourceItem = {
    id: number;
    name: string | ReactNode;
    description: string | ReactNode;
    image: string;
    timestamp: string;
};

const sampleDataSource = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        description: "The latest model of the iPhone with advanced features and improved camera.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "August 28, 2024 10:00 AM",
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        description: "A powerful Android phone with a sleek design and high performance.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "August 29, 2024 12:30 PM",
    },
    {
        id: 3,
        name: "MacBook Pro 16\"",
        description: "Apple’s top-tier laptop with a high-resolution display and robust processing power.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "August 30, 2024 09:45 AM",
    },
    {
        id: 4,
        name: "Dell XPS 13",
        description: "A compact and powerful laptop with an impressive display and performance.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "August 31, 2024 03:15 PM",
    },
    {
        id: 5,
        name: "Google Pixel 8",
        description: "The latest Google smartphone with advanced AI features and a stunning camera.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 01, 2024 08:20 AM",
    },
    {
        id: 6,
        name: "Microsoft Surface Laptop 5",
        description: "A sleek and versatile laptop from Microsoft with excellent performance.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 02, 2024 11:00 AM",
    },
    {
        id: 7,
        name: "Lenovo ThinkPad X1 Carbon",
        description: "A lightweight and durable laptop designed for business professionals.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 03, 2024 02:45 PM",
    },
    {
        id: 8,
        name: "OnePlus 12",
        description: "A flagship smartphone with fast charging and a fluid display.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 04, 2024 09:00 AM",
    },
    {
        id: 9,
        name: "Asus ROG Phone 7",
        description: "A gaming phone with top-tier specs and a high-refresh-rate display.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 05, 2024 04:30 PM",
    },
    {
        id: 10,
        name: "HP Spectre x360",
        description: "A premium 2-in-1 laptop with a stunning design and long battery life.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 06, 2024 07:15 PM",
    },
    {
        id: 11,
        name: "Sony Xperia 1 V",
        description: "A high-end smartphone with a 4K display and exceptional camera capabilities.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 07, 2024 08:25 AM",
    },
    {
        id: 12,
        name: "Google Pixelbook Go",
        description: "A lightweight Chromebook with a quiet keyboard and long battery life.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 08, 2024 10:45 AM",
    },
    {
        id: 13,
        name: "Razer Blade 15",
        description: "A high-performance gaming laptop with a sleek design and powerful GPU.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 09, 2024 06:00 PM",
    },
    {
        id: 14,
        name: "Xiaomi Mi 13",
        description: "A budget-friendly smartphone with impressive specs and camera quality.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 10, 2024 01:30 PM",
    },
    {
        id: 15,
        name: "Huawei Mate 50 Pro",
        description: "A premium smartphone with cutting-edge technology and sleek design.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 11, 2024 08:00 AM",
    },
    {
        id: 16,
        name: "LG Gram 17",
        description: "A lightweight and large-screen laptop with exceptional battery life.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 12, 2024 10:15 AM",
    },
    {
        id: 17,
        name: "Acer Swift 3",
        description: "A budget-friendly laptop with solid performance and a slim design.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 13, 2024 03:00 PM",
    },
    {
        id: 18,
        name: "Oppo Find X6 Pro",
        description: "A flagship smartphone with innovative camera features and a sleek design.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 14, 2024 02:20 PM",
    },
    {
        id: 19,
        name: "Google Nexus 7",
        description: "A classic tablet known for its compact size and smooth performance.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 15, 2024 09:30 AM",
    },
    {
        id: 20,
        name: "Dell Alienware M15 R7",
        description: "A high-end gaming laptop with superior graphics and performance.",
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        timestamp: "September 16, 2024 11:45 AM",
    },
];

export default sampleDataSource;
