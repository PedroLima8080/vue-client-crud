
const state = {
    errors: null,
    person: {},
    persons: []
};

const getters = {
    person(state) {
        return state.person;
    },

    persons(state) {
        return state.persons;
    }
};

const actions = {
    async getPersons(context) {

        try {
            context.commit("setPersons", []);
            let response = await window.axios.get("persons");
            /*if (response.status === 200 || response.status === 201) {
              context.commit("setPreAfterSales", response.data.data);
              return response.data;
            }*/
            context.commit("setPersons", response.data);
            return response;
        } catch (error) {
            return error.response;
        }
    },
    async getPerson(context, id) {
        try {
            context.commit("setPerson", {});
            let response = await window.axios.get(`persons/${id}`);
            /*if (response.status === 200 || response.status === 201) {
              context.commit("setPreAfterSales", response.data.data);
              return response.data;
            }*/
            context.commit("setPerson", response.data);
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
    async createOrUpdatePerson(context, person) {
        try {
            let response = false;
            if (person.id) {
                console.log(person)
                response = await window.axios.put(
                    `persons/${person.id}`,
                    person
                );
            } else {
                response = await window.axios.post("persons", person);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },
    async deletePerson(context, id) {
        try {
            let response = await window.axios.delete("persons/" + id);
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
            return false;
        } catch (error) {
            return error.response;
        }
    },
};

const mutations = {
    setPersons(state, payload) {
        state.persons = payload;
    },
    setPerson(state, payload) {
        state.person = payload;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
