export default {
    async contactCoach(context, payload) {
        const request = {
            userEmail: payload.email,
            message: payload.message
        };

        const response = await fetch(`https://vue-coach-finder-4c88d-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(request)
        });

        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request to create new contact message!');
            throw error;
        }

        context.commit('addRequest', {
            id: responseData.name,
            coachId: payload.coachId,
            ...request
        });
    },
    async fetchRequests({commit, rootGetters}) {
        const coachId = rootGetters.userId;
        const token = rootGetters.token;
        const response = await fetch(`https://vue-coach-finder-4c88d-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`);

        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request to view your messages!');
            throw error;
        }

        const requests = [];
        for (const key in responseData) {
            const request = {
                ...responseData[key],
                id: key,
                coachId: coachId
            };
            requests.push(request);
        }

        commit('setRequests', requests);
    }
};