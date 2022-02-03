<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Payment Results</h1>

          <div class="fsa-level fsa-level--justify-between fsa-m-t--m fsa-m-b--m">
            <div class="fsa-text-size--4 ">Customer: <strong>JOHN SMITH (*****5555)</strong></div>
            <div class="fsa-text-size--4">Program: <strong>AGRICULTURAL RISK COVERAGE PROG - COUNTY</strong></div>
          </div>


          <div class="fsa-m-t--l">

            <table class="fsa-table">
              <caption>
              <div class="fsa-level fsa-level--justify-between">
                <h3>Payments</h3>
                <span>
                </span>
              </div>
              
              </caption>
              <thead>
                <tr>
                  <th scope="col">Payable ID</th>
                  <th scope="col" class="fsa-text-align--left">Date</th>
                  <th scope="col">State</th>
                  <th scope="col">County</th>
                  <th scope="col">Reference Number</th>
                  <th scope="col">Year</th>
                  <th class="fsa-text-align--right" scope="col">Prompt Pay Interest ($)</th>
                  <th class="fsa-text-align--right" scope="col">Program Benefit ($)</th>
                </tr>
              </thead>
              <tbody v-if="paymentsData">
                <tr v-for="payment in paymentsData" v-bind:key="payment.id">
                  <td><a @click.prevent="showPaymentDetails(payment.id)" href="#">{{payment.id}}</a></td>
                  <td>{{ payment.payment_date }}</td>
                  <td>{{ payment.state }}</td>
                  <td>{{ payment.county }}</td>
                  <td>{{ payment.ref_number }}</td>
                  <td>{{ payment.program_year }}</td>
                  <td class="fsa-text-align--right">{{ displayNumber(payment.prompt_pay_interest) }}</td>
                  <td class="fsa-text-align--right">{{ displayNumber(payment.program_benefit) }}</td>
                </tr>
                <tr>
                  <td colspan="6"><span class="fsa-text-size--4"><strong>Total Program Benefit</strong></span></td>
                  <td class="fsa-text-align--right"><span class="fsa-text-size--4"><strong>{{ promptPayInterestTotal() }}</strong></span></td>
                  <td class="fsa-text-align--right"><span class="fsa-text-size--4"><strong>{{ programBenefitTotal() }}</strong></span></td>
                </tr>
              </tbody>
            </table>

          </div>

          <div class="fsa-m-t--l">
            <button @click="gotoSummary()" class="fsa-btn fsa-btn--secondary">
              Return to Summary
            </button>
          </div>
        </div>
      </div>

    </main>

    <baseFooter HIDE_RETURN_TO_TOP="true"></baseFooter>
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
    baseFooter
  },

  setup(props){
    
    const { goto } = useNavigation();

    const paymentsData = ref([
      {
        id: 50001234,
        payment_date: '01/19/2016',
        state: 'Kansas',
        county: 'Grove',
        ref_number: 'Farm Number 123',
        program_year: '2017',
        prompt_pay_interest: 0.00,
        program_benefit: 3205.98
      },
      {
        id: 50001245,
        payment_date: '02/06/2016',
        state: 'Kansas',
        county: 'Grove',
        ref_number: 'Farm Number 223',
        program_year: '2017',
        prompt_pay_interest: 0.00,
        program_benefit: 1550.00
      },
      {
        id: 50002345,
        payment_date: '04/21/2016',
        state: 'Kansas',
        county: 'Sheridan',
        ref_number: 'Farm Number 4601',
        program_year: '2017',
        prompt_pay_interest: 0.00,
        program_benefit: 897.00
      },
      {
        id: 50002225,
        payment_date: '02/13/2016',
        state: 'Kansas',
        county: 'Sheridan',
        ref_number: 'Farm Number 101',
        program_year: '2017',
        prompt_pay_interest: 0.00,
        program_benefit: 507.12
      },
      {
        id: 50005522,
        payment_date: '04/15/2016',
        state: 'Kansas',
        county: 'Grove',
        ref_number: 'Farm Number 87',
        program_year: '2017',
        prompt_pay_interest: 0.00,
        program_benefit: 9836.00
      }
    ])

    const displayNumber = (_num) => { 
      let display = _num.toLocaleString("en-US", { style: "currency", currency: "USD" })
      return display
    };

    const promptPayInterestTotal = () => {
      let total = 0;
      paymentsData.value.forEach((o)=>{
        total += parseFloat(o.prompt_pay_interest); 
      })
      return displayNumber( total );
    }

    const programBenefitTotal = () => {
      let total = 0;
      paymentsData.value.forEach((o)=>{
        total += parseFloat(o.program_benefit); 
      })
      return displayNumber( total );
    }

    const showPaymentDetails = (_id) => {
      goto('/demos/search/payment-details/'+_id);
    }

    const gotoSummary = () => {
      goto('/demos/search/customer-summary')
    }


    return {
      goto,
      gotoSummary,
      paymentsData,
      promptPayInterestTotal,
      programBenefitTotal,
      displayNumber,
      showPaymentDetails
    }
  }
}

</script>