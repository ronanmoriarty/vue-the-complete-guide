export default {
    registerCoach(context, data) {
        const coachData = {
            id: context.rootGetters.userId, // later we'll use the id coming back from firebase.
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        context.commit('registerCoach', coachData);
    }
};