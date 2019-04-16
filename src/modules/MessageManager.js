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
                "Content-Type": "application/json",
                "headers": "headers"
            },
            body: JSON.stringify(obj)
        }).then(e => e.json())
    },

    AddNewConversation(obj) {
        return fetch(`${Settings.remoteURL}/conversations`, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
                 "headers": "headers"
             },
             body: JSON.stringify(obj)
         }).then(e => e.json())
     },

     async getAllConvos() {
        const e = await fetch(`${Settings.remoteURL}/conversations?_expand=user&_expand=user`);
        return await e.json();
    },

}


