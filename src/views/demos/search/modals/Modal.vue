<template>
  <div tabindex="0" :id="MODAL_ID" :class="'fsa-modal '+MODAL_CLASS" role="dialog" aria-hidden="true">
    <div class="fsa-modal__dialog">
      <div class="fsa-modal__content">
        <button @click="hideModal(MODAL_ID)" class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
        <h1 v-if="MODAL_TITLE!=''" class="fsa-modal__title">{{ MODAL_TITLE }}</h1>
        <slot>Modal body content</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { useModalControls } from '@/composables/useModalControls';
export default {
  props: {
    MODAL_ID: String,
    MODAL_CLASS: String,
    MODAL_TITLE: String
  },
  setup(props){
    const { hideModal } = useModalControls();
    return {
      hideModal
    }
  }
}
</script>