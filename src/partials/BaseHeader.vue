<template>
  <header>
    <tophat
      AG_ABBR="USDA"
      AG_FULL="United States Department of Agriculture"
      AG_URL="//www.usda.gov"
      AG_LOGO="./img/usda-logo--white.svg"
      SUB_AG_ABBR="FPAC"
      SUB_AG_FULL="Farm Production and Conservation"
      SUB_AG_URL="//fsa.usda.gov"
     >
     </tophat>
     
    <headerApp
      APP_ABBR_NAME="FI"
      APP_FULL_NAME="Financial Inquiry"
      PROFILE_NAME="Michael Scott (Log off)"
      LOGOFF_URL="https://www.eauth.usda.gov/Logout/logoff.asp"
    >
    </headerApp>
    
    <globalNav
      :NAV_DATA="navigationData"
      EXTRA_CLASSES="fsa-nav-global__list-item--multi-column"
      @emitSearch="submitSearch"
      USE_SEARCH="false"
    ></globalNav>
    
  </header>
</template>

<script>
import { onMounted, ref, reactive, computed } from 'vue';

import { navigationService } from '@/_services/navigation.service';
import { useStore } from 'vuex';


import tophat from '@/components/tophat/tophat.vue';
import headerApp from '@/components/header-app/header-app.vue';
import globalNav from '@/components/global-nav/global-nav.vue';
//import modal from '@/components/Modal.vue';

export default {
  components: {
    tophat,
    headerApp,
    globalNav
  },
  setup(props, {emit}){
    const store = useStore();

    const navigationData = computed(() => store.getters["navigation/getNavigation"]);

    const submitSearch = ( obj ) => {
      emit('emitSearch',obj)
      console.log('NAV SEARCH BASEHEADER', obj)
    };

    onMounted(()=>{
      store.dispatch("navigation/setNavigation");
    });

    return {
      navigationData,
      submitSearch
    }
  }  
}

</script>