
import { faCheckCircle, faTimesCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Aprobados", value: 60, color: "primary", icon: faCheckCircle },
    { id: 2, label: "No aprobados", value: 30, color: "quaternary", icon: faTimesCircle },
    { id: 3, label: "Desconocido", value: 10, color: "secondary", icon: faQuestionCircle }
];

const totalOrders = [
    { id: 1, label: "8 AM - 2 PM", value: [56, 34, 12, 43, 42, 23], color: "primary" },
    { id: 2, label: "2 PM - 8 PM", value: [32, 42, 14, 23, 18, 34], color: "secondary" }
];

export {
    trafficShares,
    totalOrders
};