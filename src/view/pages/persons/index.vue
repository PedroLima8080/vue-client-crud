<template>
  <div class="container">
    <template>
      <div class="container">
        <h2 class="text-center">
          Pessoas
          <button class="btn btn-primary" v-on:click="form()" ><font-awesome-icon icon="plus" size="sm" /></button>
        </h2>
        <div class="persons mt-3">
          <table class="table table-striped">
            <thead>
              <tr>
                <td scope="col">Nome</td>
                <td scope="col">Email</td>
                <td scope="col">Idade</td>
                <td scope="col">Celular</td>
                <td scope="col">Ações</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person in persons" :key="person.id">
                <td>{{ person.name }}</td>
                <td>{{ person.email }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.phone }}</td>
                <td>
                  <button
                    class="btn btn-primary btn-md"
                    v-on:click="form(person.id)"
                  >
                    <font-awesome-icon icon="pen" size="sm" />
                  </button>
                  &nbsp;
                  <button
                    class="btn btn-danger btn-md"
                    v-on:click="del(person.id)"
                  >
                    <font-awesome-icon icon="trash" size="sm" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "persons-index",

  computed: {
    ...mapGetters(["persons"]),
  },

  data() {
    return {
      response: {},
    };
  },

  methods: {
    ...mapActions(["getPersons", "deletePerson"]),

    form(id = null) {
      this.$router.push({ name: "getPerson", params: { id } });
    },

    async del(id) {
      await this.deletePerson(id);
      await this.loadPersons();
    },

    async loadPersons(params = {}) {
      this.response = await this.getPersons(params);
    },
  },

  async created() {
    await this.loadPersons();
  },
};
</script>
