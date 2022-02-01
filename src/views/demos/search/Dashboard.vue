<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Welcome</h1>

           <p class="fsa-text--lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut etiam sit amet. Sit amet mattis vulputate enim nulla aliquet porttitor. Urna duis convallis convallis tellus id interdum velit laoreet. Donec et odio pellentesque diam volutpat commodo sed. Eget mauris pharetra et ultrices neque ornare aenean euismod. Eu facilisis sed odio morbi quis commodo odio. Id diam maecenas ultricies mi eget mauris pharetra. Nec nam aliquam sem et.
            </p>

            <div class="fsa-m-t--l">
              <div class="fsa-level fsa-level--gutter-xl">
                
                <span>
                  <p>Search Customer by DUNS or SAM UEI number.</p>
                  <div class="fsa-search" role="search">
                    <div class="fsa-search__bd">
                      <div class="fsa-search__entry fsa-search__entry--grow">
                        <label class="fsa-search__label fsa-search__label--sr-only" for="searchPhrase">DUNS/SAM UEI Number:</label>
                        <input placeholder="Search" class="fsa-input fsa-search__input" id="searchPhrase" type="search" name="searchPhrase">
                      </div>
                      <div class="fsa-search__submit">
                        <button @click="goto('/demos/search/customer-summary')" class="fsa-btn fsa-search__btn fsa-search__btn--icon">
                          <span class="fsa-search__text">Search</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </span>
                <span class="fsa-text-size--5 fsa-p-t--m">
                 or
                </span>
                <span>
                  <p>Search Customer using SCIMS.</p>
                  <button @click="goto('/demos/search/scims')" class="fsa-btn fsa-btn--secondary">SEARCH SCIMS</button>
                </span>

              </div>
            </div>

          

        </div>
      </div>

    </main>

    <baseFooter HIDE_RETURN_TO_TOP="true"></baseFooter>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import  { useNavigation } from '@/composables/useNavigation.js';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

export default {
  components: {
    baseHeader,
    baseFooter,
  },

  setup(props){
    
    const route = useRoute();
    const { goto } = useNavigation();

    return {
      goto
    }
  }
}
</script>