<template>
  <div class="fsa-topper">
    <div v-if="HIDE_RETURN_TO_TOP=='true'" class="fsa-topper__bd fsa-m-b--xs">
      <!-- no content -->
    </div>
    <div v-if="HIDE_RETURN_TO_TOP!='true'" class="fsa-topper__bd">
      <a class="fsa-topper__link" href="#main-content">Return to top</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    HIDE_RETURN_TO_TOP: String
  }
  
}
</script>