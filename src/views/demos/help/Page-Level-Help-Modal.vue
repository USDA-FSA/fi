<template>
  <div tabindex="0" :id="MODAL_ID" class="fsa-modal fsa-modal--large" role="dialog" aria-hidden="true">
    <div class="fsa-modal__dialog">
      <div class="fsa-modal__content">
        <button @click="hideModal(MODAL_ID)" class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
        <h1 class="fsa-modal__title">Payment Certification Approval Help</h1>
        
        <p>This screen provides the details of an individual payment as well as a payment that is associated with a package. The same general information listed on the Payment Certification screen is repeated. A transaction summary will be provided below detailing increases and reductions of the payment amount to the customer. The additional information may include:</p>

        <ol>
          <li>Prompt Payment Interest Date and Reason Code</li>
          <li>Foreign Person Withholding</li>
          <li>Involuntary Tax Withholding (only applied if no Foreign Person Withholding is taken)</li>
          <li>Receivables to be Offset - listed by remittance number, the amount of each offset</li>
          <li>Other Agency Claims - listed by agency name, address and amount of each offset</li>
          <li>Bankruptcy - listed by either Trustee or payee name, address and amount</li>
          <li>Alternate Payee - listed by alternate payee name and amount</li>
          <li>Assignments - listed by assignee, assignee tax ID, and amount from payment to assignment</li>
          <li>Voluntary Tax Withholding</li>
        </ol>

        <p>Producer Disbursement will display the amount payable to the customer. No Prompt Pay Interest amount will be included due to the calculation of PPI being moved to after a payment has been signed. If customer name was modified as part of the Deceased Producer Manual Handling step, verify the customer name is displayed as intended. If customer address or assignee address was modified due to it being a foreign address, verify address is displayed as intended.</p>

        <p><strong>NOTE:</strong> If a joint payment has been established for this program payment, both the customer name and joint payee will be displayed in this area.</p>

        <p>The certifying officer will determine whether the payment can be certified. There are five options available to the certifying officer for individual payments and four options for payments associated with a package.</p>

        <h3>Available Options:</h3>
        <p><strong>Defer</strong> - do nothing with the payment. It will remain in a deferred status until one of the other options is selected.</p>

        <p><strong>Approve</strong> - the certifying officer accepts the payment as displayed.</p>

        <p><strong>Reset Payment Processing</strong> - the certifying officer has determined an error in the payment transaction summary or wishes to apply offsets differently. All prompt payment processing, withholdings, and offsets will be removed from this payment. Special handling will have to be complete again for this payment before it can be certified.</p>

        <p><strong>Reset Address</strong> - to reset address from information provided by Financial Services if address displayed is incorrect. This will only reset address information for the customer, assignee, bankruptcy trustee and county office address without resetting all special handling steps processed for the payment. This will also reset address information for foreign address but will move the payment request back to Foreign Address Manual Handling step so user make changes.</p>

        <p><strong>Hold for Cancel by Program</strong> - the certifying officer has determine that this payment should not be made and the program application initiating the payment will be sending over a record to cancel this payment. This payment can no longer be certified unless the payment is reset. When payment is placed in this status, all associated special handling steps (i.e. prompt payment, withholdings, receivables) will be removed. This option is only available for individual payments and will be hidden for payments associated with a package.</p>

        <p><strong>PLEASE NOTE:</strong> Placing an individual payment or a package of payments in the Hold for Cancel by Program status does not delete the payment or the payment package from NPS. Cancellation request for the payment or payment package must be submitted by the originating program application.</p>

        <p><strong>Submit</strong> - For payments associated with a package, the user will be returned to the Package Payment Certification Worklist until all payments associated with a package have been certified. Otherwise, the user will be returned to the Payment Certification - Service Center screen. Submit and Continue - complete processing of this payment and display the detail for the next payment to be certified.</p>

        <p><strong>NOTE:</strong> Due to separation of duties, the person who certifies a payment cannot sign the same payment. Please be aware if multiple users certify payments within the same payment package, those users will be unable to sign the payment package.</p>

      </div>
    </div>
  </div>
</template>

<script>
import { useModalControls } from '@/composables/useModalControls';
export default {
  props: {
    MODAL_ID: String
  },
  setup(props){
    const { hideModal } = useModalControls();
    return {
      hideModal
    }
  }
}
</script>