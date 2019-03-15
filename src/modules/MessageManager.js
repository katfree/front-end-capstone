import Settings from "./Settings"

export default {
    async getAll() {
        const e = await fetch(`${Settings.remoteURL}/privateMessages?_expand=user&_expand=user`);
        return await e.json();
    },

    CreateNewMessage(obj) {
       return fetch(`${Settings.remoteURL}/privateMessages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(e => e.json())
    }

}


