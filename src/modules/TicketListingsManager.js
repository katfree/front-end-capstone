import Settings from "./Settings"

export default {
    async getAll() {
        const e = await fetch(`${Settings.remoteURL}/ticketListings`);
        return await e.json();
    },
    async CreateNewTicketListing(obj) {
        const data = await fetch(`${Settings.remoteURL}/ticketListings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        return await data.json();
    },
    async delete(id) {
        const e = await fetch(`${Settings.remoteURL}/ticketListings/${id}`, {
            method: "DELETE"
        });
        return await e.json();
    },

}