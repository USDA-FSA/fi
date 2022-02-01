<template>
  <footer>
    <footerTopper :HIDE_RETURN_TO_TOP="HIDE_RETURN_TO_TOP" ></footerTopper>
    <footerFooter 
      APP_ABBR_NAME="FI">
    </footerFooter>
    <footerScreenId
      SCREEN_ID="FI-123-XYZ">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>
import { inject, onMounted, ref, computed } from 'vue';

import footerTopper from '@/components/footer/footer-topper.vue';
import footerFooter from '@/components/footer/footer-footer.vue';
import footerScreenId from '@/components/footer/footer-screen-id.vue';
import hiddenItems from '@/components/hidden/hidden-items.vue';

export default {
  props: {
    HIDE_RETURN_TO_TOP: String
  },
  setup(){

  },
  components: {
    footerTopper,
    footerFooter,
    footerScreenId,
    hiddenItems
  }
}
</script>