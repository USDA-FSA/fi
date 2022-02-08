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
          <div>
            <field-group
                :ID="selectRepFieldId"
                GROUP_TYPE="radio"
                DISPLAY=""
                LABEL="Select Represented Customer"
                :DATA="selectRepData"
                REQUIRED=""
                BEHAVIOR=""
                EXTRA_FIELD_CLASSES="fsa-field--fill"
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE=""
                ERROR_MESSAGE="Why don't you like my pies?"
                USE_POPOVER="false"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fsa-popover--tr fsa-popover--size-small"
                :POPOVER_ID="piesFieldId+'-help-popover'"
                POPOVER_HEADER="Represented Customer "
                ref="selectRepField"
              >
                <div :id="piesFieldId + '-popup-body'">
                  <p><strong>Note:</strong> Select the Customer you would like to represent.</p>
                </div>
              </field-group>
              <div class="fsa-m-t--m">
                <button @click="goto('/demos/search/customer-summary')" class="fsa-btn fsa-btn--primary">Search</button>
              </div>
          </div>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNavigation } from '@/composables/useNavigation';
import { usePopoverControls } from '@/composables/usePopoverControls';

import { v4 as uuidv4 } from 'uuid';


import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const fieldGroup = defineAsyncComponent(() => import('@/components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/components/selection/selection.vue'));
const inlineHelp = defineAsyncComponent(() => import('@/components/inline-help/inline-help.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    fieldGroup,
    selection,
    inlineHelp
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();

    const { showPopover, hidePopover } = usePopoverControls();

    const selectRepField = ref(null);

    const selectRepFieldId = ref( uuidv4() );
    const selectRepData = [
      { id: "sr1", label: "John Smith - 31029 Airport RD, Paris IL 61293", name: "selectRep" },
      { id: "sr2", label: "David Jones - 9387 Washington AVE Bath, NY 14830", name: "selectRep" },
      { id: "sr3", label: "Horrace McDougen - 9382 Ash Grove RD, Montgomery, NY 12593", name: "selectRep" },
      { id: "sr4", label: "Fred Owens - 3028 Delaware ST Falls City, NE 68351", name: "selectRep" },
    ];


    onMounted(()=>{

    });

    return {
      goto,
      selectRepFieldId,
      selectRepData,
      showPopover,
      hidePopover
    }
  }

}
</script>