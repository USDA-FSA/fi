<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>SCIMS</h1>

          <div class="fsa-m-t--sm">
            <div class="fsa-alert fsa-alert--success" role="alert">
              <div class="fsa-alert__body">
                <h3 class="fsa-alert__heading">SCIMS SEARCH SUCCESSFUL</h3>
                <p class="fsa-alert__text">After a successful SCIMS seach the User will be taken back to the Financial Inquires Applications.</p>
              </div>
            </div>
          </div>

          <div class="fsa-m-t--l">
            <button @click="goto('/demos/search/customer-summary')" class="fsa-btn fsa-btn--primary">Select JOHN SMITH</button>
          </div>

          

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref } from 'vue';
import  { useNavigation } from '@/composables/useNavigation.js';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

export default {
  components: {
    baseHeader,
    baseFooter,
  },

  setup(props){

    const { goto } = useNavigation();

    return {
      goto
    }
  }
}
</script>