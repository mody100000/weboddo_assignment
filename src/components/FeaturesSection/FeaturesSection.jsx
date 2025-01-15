import React from 'react';

const CustomDeliveryIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12h20v16H8zM28 20h8l4 4v4h-12v-8" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 36a4 4 0 100-8 4 4 0 000 8zM32 36a4 4 0 100-8 4 4 0 000 8z" stroke="#9333EA" strokeWidth="2" />
        <path d="M8 20h20M8 8l-4 4v20" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16h4" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const CustomMoneyBackIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="#9333EA" strokeWidth="2" />
        <text x="24" y="24" textAnchor="middle" dominantBaseline="middle" fill="#9333EA" fontSize="12">₹</text>
        <text x="24" y="32" textAnchor="middle" dominantBaseline="middle" fill="#9333EA" fontSize="10">15</text>
    </svg>
);

const CustomExchangeIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 16l-8-8v6c-8 0-14 6-14 14 0 2 0 4 1 6l2-2c0-1-1-2-1-4 0-6 5-11 12-11v6l8-7z" stroke="#9333EA" strokeWidth="2" />
        <path d="M37 16c1 2 1 4 1 6 0 8-6 14-14 14v6l-8-8 8-7v6c7 0 12-5 12-11 0-2 0-3-1-4l2-2z" stroke="#9333EA" strokeWidth="2" />
        <text x="24" y="24" textAnchor="middle" dominantBaseline="middle" fill="#9333EA" fontSize="12">₹</text>
    </svg>
);

const CustomWarrantyIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L8 12v12c0 11 7 21 16 24 9-3 16-13 16-24V12L24 4z" stroke="#9333EA" strokeWidth="2" fill="none" />
        <path d="M24 16l6 6-6 6-6-6 6-6z" stroke="#9333EA" strokeWidth="2" fill="none" />
    </svg>
);

const features1 = [
    {
        icon: <CustomDeliveryIcon />,
        title: "100% Certified & Free Shipping",
        description: "Our jewellery always comes with a certificate of authentication."
    },
    {
        icon: <CustomMoneyBackIcon />,
        title: "15 Day Money-Back",
        description: "Get 100% refund if you don't like your jewellery."
    }
]
const features2 = [
    {
        icon: <CustomExchangeIcon />,
        title: "Lifetime Exchange",
        description: "Exchange your old designs anytime you want an upgrade."
    },
    {
        icon: <CustomWarrantyIcon />,
        title: "One Year Warranty*",
        description: "If your jewellery has a defect, we will fix it."
    }
];

const FeaturesSection = () => {
    return (
        <div className="w-full bg-[#1A0B2E] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                    {features1.map((feature, index) => (
                        <Feature feature={feature} key={index} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-16">
                    {features1.map((feature, index) => (
                        <Feature feature={feature} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Feature = ({ feature }) => {
    return (
        <div className="flex items-start space-x-9">
            <div className="flex-shrink-0 p-2">
                {feature.icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-white font-bold mb-2">
                    {feature.title}
                </h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </div>
    )
}

export default FeaturesSection;