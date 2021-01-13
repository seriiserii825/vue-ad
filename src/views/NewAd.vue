<template>
  <div class="page-new-ad">
    <div class="container">
      <PageTitle title="New ad"></PageTitle>
      <Form class="page-new-ad__form" @submit.native.prevent="onSubmitForm" enctype="multipart/form-data">
        <h2 class="form__title" slot="title">Create new add</h2>
        <div class="form__group" :class="{'active': titleFocus, 'invalid': titleInvalid}" slot="form-group-1">
          <label :for="title">Title</label>
          <input
            @input="$v.title.$touch()"
            @focusin="onInputFocus('titleFocus', 'titleInvalid')"
            @focusout="checkInputFocus($event, 'titleFocus')"
            type="text"
            id="title"
            v-model="title"
          >
          <p class="field-error" v-if="titleInvalid">This field is required</p>
        </div>
        <div class="form__group" :class="{'active': descriptionFocus, 'invalid': descriptionInvalid}" slot="form-group-1">
          <label :for="description">Description</label>
          <textarea
            @input="$v.description.$touch()"
            @focusin="onInputFocus('descriptionFocus', 'descriptionInvalid')"
            @focusout="checkInputFocus($event, 'descriptionFocus')"
            id="description"
            v-model="description"
          >
          </textarea>
          <p class="field-error" v-if="titleInvalid">This field is required</p>
        </div>
        <div class="form-upload-image" slot="form-group-3">
          <Button label="Upload"></Button>
          <div class="form-upload-image__img">
            <img width="200" :src="require(`@/assets/images/products/1.jpg`)" alt="">
          </div>
          <h3 class="form-upload-image__title">Promo?</h3>
          <SwitchBtn @click.prevent.native="togglePromo" class="form-upload-image__switch" :value="promo"></SwitchBtn>
        </div>
        <Button type="submit" label="Create new ad" slot="submit"></Button>
      </Form>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import {required} from 'vuelidate/lib/validators'
import Button from '@/components/ui/Button'
import Form from '@/components/form/Form'
import SwitchBtn from '@/components/ui/SwitchBtn'

export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      titleFocus: false,
      titleInvalid: false,
      descriptionFocus: false,
      descriptionInvalid: false
    }
  },
  methods: {
    checkInputFocus (e, input) {
      if (e.target.value === '') {
        this[input] = false
      }
    },
    onSubmitForm () {
      if (!this.$v.title.required) {
        this.titleInvalid = true
      }
      if (!this.$v.description.required) {
        this.descriptionInvalid = true
      }
      if (this.$v.title.required && this.$v.description.required) {
        const newAd = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imgSrc: '2.jpg'
        }
        this.$store.dispatch('createAd', newAd)
          .then(() => {
            this.$router.push('/my-ads')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    onInputFocus (inputFocus, inputInvalid) {
      this[inputFocus] = true
      this[inputInvalid] = false
    },
    togglePromo () {
      this.promo = !this.promo
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  validations: {
    title: {
      required
    },
    description: {
      required
    }
  },
  components: {
    PageTitle,
    Button,
    Form,
    SwitchBtn
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.page-new-ad {
  text-align: center;
  &__form {
    display: inline-block;
  }
}
.form-upload-image {
  margin-bottom: 2rem;
  text-align: left;
  &__title {
    margin-bottom: 2rem;
  }
  img {
    display: block;
    margin-bottom: 3rem;
  }
  button {
    margin-bottom: 2rem;
  }
  &__switch {
    justify-content: flex-start;
    .on.active {
      background: $accent;
    }
    .off.active {
      background: $contrast;
    }
  }
}
</style>
