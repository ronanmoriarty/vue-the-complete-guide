export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId; // later we'll use the id coming back from firebase.
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await fetch(`https://vue-coach-finder-4c88d-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();
        if(!response.ok) {
            // some error handling to write later
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context) {
        const response = await fetch('https://vue-coach-finder-4c88d-default-rtdb.europe-west1.firebasedatabase.app/coaches.jso');
        const responseData = await response.json();
        if(!responseData.ok) {
            // some error handling for here later
        }

        const coaches = [];
        for (const key in responseData) {
            const data = responseData[key];
            const coach = {
                id: key,
                firstName: data.firstName,
                lastName: data.lastName,
                description: data.description,
                hourlyRate: data.hourlyRate,
                areas: data.areas
            };
            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
    }
};