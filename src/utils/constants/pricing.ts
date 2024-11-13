// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_FEATURES = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
export const PLANS = [
    {
        name: "لـنـدو",
        info: "For most individuals",
        icon: "/",
        price: {
            monthly: 23,
            yearly: 0,
        },
        features: [
            { text: "حداکثر اعتبار 	50 میلیون تومان" },
            { text: "نرخ موثر 	57.1 %", tooltip: "این نرخ سود برای بازپرداخت ۱۲ ماه و سقف ۲۰ میلیون تومان است" },
            { text: "کارت نقدی" },
            { text: "حداکثر مدت بازپرداخت 	12 ماه" },
            { text: "مبلغ اقساط 	4,705,000 تومان", tooltip: "این مبلغ برای سقف وام ۵۰ میلیون و بازپرداخت ۱۲ ماه است" },
            { text: "دیجیتال، مد و استایل، بلیت هتل، خانگی و اداری، بیمه و خدمات تخصصی", tooltip: "کالاهای مورد خرید" },
            { text: "غیرحضوری", tooltip: "اعتبارسنجی" },
        ],
        btn: {
            text: "اطـلاعات بـیشتر",
            href: "/auth/sign-up?plan=free",
            variant: "default",
        }
    },
    {
        name: "اسـنـپ پـی",
        info: "For small businesses",
        price: {
            monthly: 22,
            yearly: Math.round(9 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "حداکثر اعتبار	50 میلیون تومان" },
            { text: "نرخ موثر 	42.3 %", tooltip:"این نرخ برای بازپرداخت ۱۲ ماه است" },
            { text: "نوع اعتبار کیف پول" },
            { text: "حداکثر مدت بازپرداخت 	24 ماه", tooltip: "بازپرداخت اسنپ پی ۱۲ و ۲۴ ماه است" },
            { text: "مبلغ اقساط :	2,618,600 تومان", tooltip: "این مبلغ برای سقف وام ۵۰ میلیون تومان و بازپرداخت ۲۴ ماه است" },
            { text: "لوازم دیجیتال، لوازم خانگی، طلا" },
            { text: "غیرحضوری", tooltip: "اعتبارسنجی" },
        ],
        btn: {
            text: "اطـلاعات بـیشتر",
            href: "/auth/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "ونـسـی",
        info: "For large organizations",
        price: {
            monthly: 23,
            yearly: Math.round(49 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "نرخ موثر 	45 %", tooltip:"این نرخ سود برای بازپرداخت ۱۲ ماه و سقف ۲۰ میلیون تومان است ، نرخ موثر ونسی برحسب دوره بازپرداخت و نرخ کارمزد بین ۲۸-۴۵ درصد است." },
            { text: "کیف پول" },
            { text: "حداکثر مدت بازپرداخت 	12 ماه",tooltip:"بازپرداخت ونسی ۳، ۶،  ۹ و ۱۲ ماهه است" },
            { text: "مبلغ اقساط 	14,057,292 تومان", tooltip: "این مبلغ برای حداکثر سقف سود و بازپرداخت ۱۲ ماه است" },
            { text: "مدل ضمانت : رمز ارز" },
            { text: "کالاهای موجود در سایت ونسی", tooltip: "کالاهای مورد خرید" },
            { text: "غیرحضوری", tooltip: "اعتبارسنجی" },
        ],
        btn: {
            text: "اطـلاعات بـیشتر",
            href: "/auth/sign-up?plan=business",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Shorten links",
        tooltip: "Create shortened links",
    },
    {
        text: "Track clicks",
        tooltip: "Track clicks on your links",
    },
    {
        text: "See top countries",
        tooltip: "See top countries where your links are clicked",
    },
    {
        text: "Upto 10 tags",
        tooltip: "Add upto 10 tags to your links",
    },
    {
        text: "Community support",
        tooltip: "Community support is available for free users",
    },
    {
        text: "Priority support",
        tooltip: "Get priority support from our team",
    },
    {
        text: "AI powered suggestions",
        tooltip: "Get AI powered suggestions for your links",
    },
];

export const WORKSPACE_LIMIT = 2;