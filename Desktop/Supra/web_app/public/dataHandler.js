class DataHandler {
    constructor() {
        this.appointments = [];
        this.orders = [];
        this.deliveries = [];
    }

    addAppointment(doctor, creator) {
        this.appointments.push({ doctor, creator });
    }

    addOrder(doctor, patient, status, employee) {
        this.orders.push({ doctor, patient, status, employee });
    }

    addDelivery(doctor, patient, deliveryDate) {
        this.deliveries.push({ doctor, patient, deliveryDate });
    }

    getAppointments() {
        return this.appointments;
    }

    getOrders() {
        return this.orders;
    }

    getDeliveries() {
        return this.deliveries;
    }

    clearData() {
        this.appointments = [];
        this.orders = [];
        this.deliveries = [];
    }
}

const dataHandler = new DataHandler();
export default dataHandler;
