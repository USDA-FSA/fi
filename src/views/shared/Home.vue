<template>
  <div>

    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>FI Prototype</h1>

          <div class="fsa-text--lead">
            This prototype site is designed to showcase high-fidelity UX process flow. Select from the above Demo links to begin a flow.
          </div>
          <div>
            <p>Select from the Demos in the Global Navigation above. </p>
            <field-group
                :ID="selectRepFieldId"
                GROUP_TYPE="radio"
                DISPLAY=""
                LABEL=""
                :DATA="selectRepData"
                REQUIRED=""
                BEHAVIOR=""
                EXTRA_FIELD_CLASSES=""
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE=""
                ERROR_MESSAGE="Why don't you like my pies?"
                USE_POPOVER="true"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fsa-popover--tr fsa-popover--size-small"
                :POPOVER_ID="piesFieldId+'-help-popover'"
                POPOVER_HEADER="Represented Customer Help"
                ref="pieField"
              >
                <div :id="piesFieldId + '-popup-body'">
                  <p><strong>Note:</strong> Select the Customer you would like to represent.</p>
                </div>
              </field-group>
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
      { id: "pie1", label: "Apple Pie", name: "piegroup" },
      { id: "pie2", label: "Pumpkin Pie", name: "piegroup" },
      { id: "pie3", label: "Keylime Pie", name: "piegroup" },
      { id: "pie4", label: "French Silk Pie", name: "piegroup" },
    ];


    onMounted(()=>{

    });

    return {
      selectRepFieldId,
      selectRepData,
      showPopover,
      hidePopover
    }
  }

}
</script>