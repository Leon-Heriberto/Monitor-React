
import { faGoogle, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, } from '@fortawesome/free-solid-svg-icons';


const registersApi = [
    { id: 1, serial: '3469L1134', fechaLectura: '27/01/2021 08:30:45:00', bounceRate: 1, pageName: "5302" },
    { id: 2, serial: '3469L1133', fechaLectura: '27/01/2021 08:30:44:55', bounceRate: 1, pageName: "5301" },
    { id: 3, serial: '3469L1132', fechaLectura: '27/01/2021 08:30:44:50', bounceRate: 0, pageName: "5300" },
    { id: 4, serial: '3469L1131', fechaLectura: '27/01/2021 08:30:44:45', bounceRate: 1, pageName: "5299" },
    { id: 5, serial: '3469L1130', fechaLectura: '27/01/2021 08:30:44:40', bounceRate: 1, pageName: "5298" }
];

const pageTraffic = [
    { id: 1, source: "Direct", sourceType: "Direct", trafficShare: 51, change: 2.45, sourceIcon: faGlobeEurope, sourceIconColor: "gray" },
    { id: 2, source: "Google Search", sourceType: "Search / Organic", trafficShare: 18, change: 17.67, sourceIcon: faGoogle, sourceIconColor: "info" },
    { id: 3, source: "youtube.com", sourceType: "Social", category: "Arts and Entertainment", rank: 2, trafficShare: 27, sourceIcon: faYoutube, sourceIconColor: "danger" },
    { id: 4, source: "yahoo.com", sourceType: "Referral", category: "News and Media", rank: 11, trafficShare: 8, change: -9.30, sourceIcon: faYahoo, sourceIconColor: "purple" },
    { id: 5, source: "twitter.com", sourceType: "Social", category: "Social Networks", rank: 4, trafficShare: 4, sourceIcon: faTwitter, sourceIconColor: "info" }
];

const invoiceItems = [
    { id: 1, item: "Origin License", description: "Extended License", price: "999,00", quantity: 1 },
    { id: 2, item: "Custom Services", description: "Instalation and Customization (cost per hour)", price: "150,00", quantity: 20 },
    { id: 3, item: "Hosting", description: "1 year subcription", price: "499,00", quantity: 1 },
    { id: 4, item: "Platinum Support", description: "1 year subcription 24/7", price: "3999,00", quantity: 1 },
];

export {
    registersApi,
    pageTraffic,
    invoiceItems,
};