<template>
  <div class="container">
    <h2 class="text-center">
      {{ currentPerson.id ? "Editar Pessoa" : "Cadastrar Pessoa" }}
    </h2>
    <div class="personForm mt-3" needs-validation novalidate>
      <div class="row">
        <div class="form-group col-md-5">
          <label for="name">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Nome"
            v-model="currentPerson.name"
            :class="{ 'is-invalid': errors.name }"
          />
          <div v-if="errors.name" class="invalid-feedback">
            <span v-for="(error, i) in errors.name" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
        <div class="form-group col-md-7">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Email"
            v-model="currentPerson.email"
            :class="{ 'is-invalid': errors.email }"
          />
          <div v-if="errors.email" class="invalid-feedback">
            <span v-for="(error, i) in errors.email" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="form-group col-md-3">
          <label for="age">Idade</label>
          <input
            type="number"
            class="form-control"
            id="age"
            name="age"
            placeholder="Idade"
            v-model="currentPerson.age"
            :class="{ 'is-invalid': errors.age }"
          />
          <div v-if="errors.age" class="invalid-feedback">
            <span v-for="(error, i) in errors.age" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
        <div class="form-group col-md-3">
          <label for="cpf">CPF</label>
          <the-mask
            :mask="['###.###.###-##']"
            :masked="true"
            class="form-control"
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Insira seu CPF"
            v-model="currentPerson.cpf"
            :class="{ 'is-invalid': errors.cpf }"
          />
          <div v-if="errors.cpf" class="invalid-feedback">
            <span v-for="(error, i) in errors.cpf" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
        <div class="form-group col-md-3">
          <label for="phone">Celular</label>
          <the-mask
            :mask="['(##) #####-####']"
            :masked="true"
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            placeholder="(xx) xxxxx-xxxx"
            v-model="currentPerson.phone"
            :class="{ 'is-invalid': errors.phone }"
          />
          <div v-if="errors.phone" class="invalid-feedback">
            <span v-for="(error, i) in errors.phone" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
        <div class="form-group col-md-3">
          <label for="cep">CEP</label>
          <the-mask
            :mask="['#####-###']"
            :masked="true"
            type="text"
            class="form-control"
            id="cep"
            name="cep"
            placeholder="Insira seu CEP"
            v-model="currentPerson.cep"
            :class="{ 'is-invalid': errors.cep }"
          />
          <div v-if="errors.cep" class="invalid-feedback">
            <span v-for="(error, i) in errors.cep" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="form-group col-md-3">
          <label for="street">Rua</label>
          <input
            type="text"
            class="form-control"
            id="street"
            name="street"
            placeholder="Insira sua rua"
            v-model="currentPerson.street"
            :class="{ 'is-invalid': errors.street }"
          />
          <div v-if="errors.street" class="invalid-feedback">
            <span v-for="(error, i) in errors.street" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
        <div class="form-group col-md-3">
          <label for="house_number">Número</label>
          <input
            type="text"
            class="form-control"
            id="house_number"
            name="house_number"
            placeholder="Insira o número da casa"
            v-model="currentPerson.house_number"
            :class="{ 'is-invalid': errors.house_number }"
          />
          <div v-if="errors.house_number" class="invalid-feedback">
            <span v-for="(error, i) in errors.house_number" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
        <div class="form-group col-md-3">
          <label for="neighborhood">Bairro</label>
          <input
            type="text"
            class="form-control"
            id="neighborhood"
            name="neighborhood"
            placeholder="Insira seu bairro"
            v-model="currentPerson.neighborhood"
            :class="{ 'is-invalid': errors.neighborhood }"
          />
          <div v-if="errors.neighborhood" class="invalid-feedback">
            <span v-for="(error, i) in errors.neighborhood" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
        <div class="form-group col-md-3">
          <label for="city">Cidade</label>
          <input
            type="text"
            class="form-control"
            id="city"
            name="city"
            placeholder="Insira sua cidade"
            v-model="currentPerson.city"
            :class="{ 'is-invalid': errors.city }"
          />
          <div v-if="errors.city" class="invalid-feedback">
            <span v-for="(error, i) in errors.city" :key="i">
              {{ error }}
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <button class="btn btn-secondary" v-on:click="cancel()">
            Cancelar
          </button>
          &nbsp;
          <button class="btn btn-primary" v-on:click="submitForm()">
            {{ currentPerson.id ? "Salvar" : "Cadastrar" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "persons-form",

  computed: {
    ...mapGetters(["person"]),
  },

  data() {
    return {
      currentPerson: {},
      errors: {},
    };
  },

  methods: {
    ...mapActions(["getPerson", "createOrUpdatePerson"]),

    cancel() {
      this.$router.push({ name: "persons" });
    },

    async submitForm() {
      let response = await this.createOrUpdatePerson(this.currentPerson);
      if (response && (response.status == 200 || response.status == 201)) {
        this.$router.push({ name: "persons" });
      } else if (response.data.errors || response.status == 422) {
        this.errors = response.data.errors;
      }
    },
  },

  async created() {
    if (this.$route.params.id) {
      await this.getPerson(this.$route.params.id);
      this.currentPerson = this.person;
    }
  },
};
</script>


