<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Customer Summary</h1>

          <div class="fsa-text-size--4 fsa-m-t--m fsa-m-b--m">Customer: <strong>JOHN SMITH (*****5555)</strong></div>

          <div v-if="tabsData" class="fsa-content-tabs fsa-content-tabs--justified-equal">
            <ul class="fsa-content-tabs__list">
              <li v-for="tab in tabsData" :key="tab.id" class="fsa-content-tabs__item">
                <a :id="tab.id"
                  @click.prevent="handleTabSelect(tab.id)"
                  :class="'fsa-content-tabs__label fsa-content-tabs__label--large ' + setSelectedClass(tab.isSelected)"
                  href="">
                  <span class="fsa-content-tabs__label-text">{{ tab.label }}</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="fsa-m-t--l" v-if="setIsSelectedContainer( tabPaymentsId )" :id="tabPaymentsId +'-container'">

            <table class="fsa-table">
              <caption>
              <div class="fsa-level fsa-level--justify-between">
                <h3>Payments</h3>
                <span>
                <div class="fsa-level fsa-level--gutter-s">
                  <button @click="showModal(tabPaymentsId+'-modal')" :aria-controls="tabPaymentsId+'-modal'" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                      Search
                  </button> 
                  
                  <button @click="viewAll(tabPaymentsId)" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>
                    View All
                  </button>
                  </div>
                </span>
              </div>
              
              </caption>
              <thead>
                <tr>
                  <th scope="col" class="fsa-text-align--left">Date</th>
                  <th scope="col">ACH/Check Number</th>
                  <th scope="col">Gross Benefit ($)</th>
                  <th scope="col">Net Payment ($)</th>
                </tr>
              </thead>
              <tbody v-if="paymentsData">
                <tr v-for="payment in paymentsData" v-bind:key="payment.id">
                  <td><a @click.prevent="showPaymentDetails(payment.id)" href="#">{{ payment.payment_date }}</a></td>
                  <td>{{ payment.ach_check_num }}</td>
                  <td>{{ payment.gross_benefit }}</td>
                  <td>{{ payment.net_payment }}</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div class="fsa-m-t--l" v-if="setIsSelectedContainer( tabCollectionsId )" :id="tabCollectionsId +'-container'">
            <table class="fsa-table">
              <caption>
              <div class="fsa-level fsa-level--justify-between">
                <h3>Collections</h3>
                <span>
                <div class="fsa-level fsa-level--gutter-s">
                  <button @click="showModal(tabCollectionsId+'-modal')" :aria-controls="tabCollectionsId+'-modal'" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                      Search
                  
                  </button> 
                  
                  <button @click="viewAll(tabCollectionsId)" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>
                    View All
                  </button>
                  </div>
                </span>
              </div>
              
              </caption>
              <thead>
                <tr>
                  <th scope="col" class="fsa-text-align--left">Date</th>
                  <th scope="col">Program Description</th>
                  <th scope="col" class="fsa-text-align--right">Collection Amount ($)</th>
                </tr>
              </thead>
              <tbody v-if="collectionsData">
                <tr v-for="collection in collectionsData" v-bind:key="collection.id">
                  <td><a @click.prevent="" href="#">{{ collection.collection_date }}</a></td>
                  <td>{{ collection.program_desc }}</td>
                  <td class="fsa-text-align--right">{{ collection.collection_amount }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="fsa-m-t--l" v-if="setIsSelectedContainer( tabDebtsId )" :id="tabDebtsId +'-container'">
            <table class="fsa-table">
              <caption>
              <div class="fsa-level fsa-level--justify-between">
                <h3>Debts</h3>
                <span>
                <div class="fsa-level fsa-level--gutter-s">
                  <button @click="showModal(tabDebtsId+'-modal')" :aria-controls="tabDebtsId+'-modal'" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                      Search
                  
                  </button> 
                  
                  <button @click="viewAll(tabDebtsId)" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>
                    View All
                  </button>
                  </div>
                </span>
              </div>
              
              </caption>
              <thead>
                <tr>
                  <th scope="col" class="fsa-text-align--left">Receivable ID</th>
                  <th scope="col">Program Description</th>
                  <th scope="col" class="fsa-text-align--right">Outstanding Balance ($)</th>
                </tr>
              </thead>
              <tbody v-if="debtsData">
                <tr v-for="debt in debtsData" v-bind:key="debt.id">
                  <td><a @click.prevent="" href="#">{{ debt.receivable_id }}</a></td>
                  <td>{{ debt.program_desc }}</td>
                  <td class="fsa-text-align--right">{{ debt.outstanding_balance }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="fsa-m-t--l" v-if="setIsSelectedContainer( tabIrsFormsId )" :id="tabIrsFormsId +'-container'">
            <table class="fsa-table">
              <caption>
              <div class="fsa-level fsa-level--justify-between">
                <h3>IRS Forms</h3>
                <span>
                <div class="fsa-level fsa-level--gutter-s">
                  <button @click="showModal(tabIrsFormsId+'-modal')" :aria-controls="tabIrsFormsId+'-modal'" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                      Search
                  
                  </button> 
                  
                  <button @click="viewAll(tabIrsFormsId)" class="fsa-btn fsa-btn--secondary fsa-btn--small">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>
                    View All
                  </button>
                  </div>
                </span>
              </div>
              
              </caption>
              <thead>
                <tr>
                  <th scope="col" class="fsa-text-align--left">Tax Year</th>
                  <th scope="col">IRS Form ID</th>
                  <th scope="col" class="fsa-text-align--right">Reportable Income ($)</th>
                  <th scope="col" class="fsa-text-align--right">Dederal Income Tax Withheld ($)</th>
                </tr>
              </thead>
              <tbody v-if="irsFormsData">
                <tr v-for="form in irsFormsData" v-bind:key="form.id">
                  <td>{{ form.tax_year }}</td>
                  <td><a @click.prevent="" href="#">{{ form.form_id }}</a></td>
                  <td class="fsa-text-align--right">{{ form.income }}</td>
                  <td class="fsa-text-align--right">{{ form.tax_withheld }}</td>
                </tr>
              </tbody>
            </table>
          </div>



        </div>
      </div>

      

      <!-- Payments Modal START -->
      <demo-modal :MODAL_ID="tabPaymentsId+'-modal'" MODAL_CLASS="" MODAL_TITLE="Payments Modal Title">
        <div class="fsa-level">
          <span>
            <div class="fsa-field fsa-field--fill">
              <label class="fsa-field__label" for="date-picker-basic">Start Date</label>
              <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-1" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              <span class="fsa-field__help" id="date-picker-basic__help"></span>
            </div>
          </span>
          <span>
            <div class="fsa-field">
              <label class="fsa-field__label" for="date-picker-basic">End Date</label>
              <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-2" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              <span class="fsa-field__help" id="date-picker-basic__help"></span>
            </div>
          </span>
        </div>
        <div class="fsa-field fsa-m-t--m fsa-field--fill">
          <label class="fsa-field__label" id="unique-id-lorem--1234">Program</label>
          <ul class="fsa-form-list" aria-describedby="unique-id-lorem--help--1234" aria-labelledby="unique-id-lorem--1234">
            <li>
              <span>
                <input class="fsa-checkbox" id="apple" type="checkbox" name="program1" checked="">
                <label for="apple">Agricultural Risk Coverage Prog - County Loan Deficiency - Wheat</label>
              </span>
            </li>
            <li>
              <span>
                <input class="fsa-checkbox" id="key-lime" type="checkbox" name="program1">
                <label for="key-lime">Some Other Program Name That Too Long</label>
              </span>
            </li>
          </ul>
          <span class="fsa-field__help" id="unique-id-lorem--help--1234">Select Multiple Programs if needed</span>
        </div>
        <div class="fsa-field fsa-m-t--m fsa-field--fill">
          <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">Program</label>
          <div class="fsa-select-multi fsa-field__item">
            <ul class="fsa-select-multi__list" id="UNIQUE-ID-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4">
              <li class="fsa-select-multi__item">
                <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_one" type="checkbox" name="default-loskss4ga_one" value="One" checked="">
                <label class="fsa-select-multi__label" for="default-loskss4ga_one">Agricultural Risk Coverage Prog - County Loan Deficiency - Wheat</label>
              </li>
              <li class="fsa-select-multi__item">
                <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_two" type="checkbox" name="default-loskss4ga_two" value="Two">
                <label class="fsa-select-multi__label" for="default-loskss4ga_two">Some Other Program Name That Too Long</label>
              </li>
            </ul>
          </div>
          <span class="fsa-field__help" id="lorem-hshhsjtext-help-4">Instructional message here</span>
        </div>
        <div class="fsa-m-t--m">
          Gross Benefit Amount Range
        </div>
        <div class="fsa-level fsa-m-t--none">
          <span>
            <div class="fsa-field fsa-field--fill">
              <label class="fsa-field__label" for="date-picker-basic">Minimum</label>
              <span class="fsa-affix fsa-affix--fill">
                <label for="lorem-778affixs459" class="fsa-affix__prefix" aria-hidden="true" title="Dollars">$</label>
                <input placeholder="" class="fsa-input fsa-field__item fsa-affix__item" id="" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              </span>
              <span class="fsa-field__help" id="date-picker-basic__help"></span>
            </div>
          </span>
          <span>
            <div class="fsa-field">
              <label class="fsa-field__label" for="date-picker-basic">Maximum</label>
              <span class="fsa-affix fsa-affix--fill">
                <label for="lorem-778affixs459" class="fsa-affix__prefix" aria-hidden="true" title="Dollars">$</label>
                <input placeholder="" class="fsa-input fsa-field__item fsa-affix__item" id="" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              </span>
              <span class="fsa-field__help" id="date-picker-basic__help"></span>
            </div>
          </span>
        </div>

        <div class="fsa-field">
          <label class="fsa-field__label" for="UNIQdsfsdfsD-hshhsjtex">State <span class="fsa-field__label-desc">Required</span></label>
          <select class="fsa-select fsa-field__item" id="UNIQdsfsdfsD-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4" aria-required="true" name="UNIQdsfsdfsD-hshhsjtex">
            <option value="Option A" selected="selected">State Name</option>
            <option value="Option B">State Name</option>
            <option value="Option C">State Name</option>
            <option value="Option D">State Name</option>
            <option value="Option E">State Name</option>
          </select>
          <span class="fsa-field__help" id="lorem-hshhsjtext-help-4"></span>
        </div>

        <div class="fsa-field">
          <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">County <span class="fsa-field__label-desc">Required</span></label>
          <select class="fsa-select fsa-field__item" id="UNIQUE-ID-hshhsjteCounty" aria-describedby="UNIQUE-ID-hshhsjteCounty-help-4" aria-required="true" name="UNIQUE-ID-hshhsjteCounty">
            <option value="Option A" selected="selected">County Name</option>
            <option value="Option B">County Name</option>
            <option value="Option C">County Name</option>
            <option value="Option D">County Name</option>
            <option value="Option E">County Name</option>
          </select>
          <span class="fsa-field__help" id="lorem-hshhsjtext-help-4"></span>
        </div>

        <div class="fsa-field">
          <label class="fsa-field__label" for="ach-id-id">ACH / Check Number <span class="fsa-field__label-desc">Required</span></label>
          <input class="fsa-input fsa-field__item" id="ach-id-id" aria-describedby="lorem-1234-help-2" aria-required="true" name="ach-id-id" type="text" value="">
          <span class="fsa-field__help" id="ach-id-id-help-2"></span>
        </div>
        <div class="fsa-m-t--m">
          <button @click="handleViewResults(tabPaymentsId)" class="fsa-btn fsa-btn--primary">
            <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            Search
          </button>
        </div>

      </demo-modal>
      <!-- Payments Modal END -->

      <!-- Collections Modal START -->
      <demo-modal :MODAL_ID="tabCollectionsId+'-modal'" MODAL_CLASS="" MODAL_TITLE="Collections Modal Title">
        <p>collections content goes here</p>
      </demo-modal>
      <!-- Collections Modal END -->

      <!-- Debts Modal START -->
      <demo-modal :MODAL_ID="tabDebtsId+'-modal'" MODAL_CLASS="" MODAL_TITLE="Debts Modal Title">
        <p>Debts content goes here</p>
      </demo-modal>
      <!-- Debts Modal END -->

      <!-- IRS Forms Modal START -->
      <demo-modal :MODAL_ID="tabIrsFormsId+'-modal'" MODAL_CLASS="" MODAL_TITLE="IRS Forms Modal Title">
        <span class="fsa-m-t--l">Date Range of Indebtedness:</span>
        <div class="fsa-level fsa-m-t--xs">
          <span>
            <div class="fsa-field fsa-field--fill">
              <label class="fsa-field__label" for="date-picker-basic">Start Date</label>
              <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-1" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              <span class="fsa-field__help" id="date-picker-basic__help">Use format: mm/dd/yyyy</span>
            </div>
          </span>
          <span>
            <div class="fsa-field">
              <label class="fsa-field__label" for="date-picker-basic">End Date</label>
              <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-2" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              <span class="fsa-field__help" id="date-picker-basic__help">Use format: mm/dd/yyyy</span>
            </div>
          </span>
        </div>
        <div class="fsa-field fsa-m-t--m fsa-field--fill">
          <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">Program</label>
          <div class="fsa-select-multi fsa-field__item">
            <ul class="fsa-select-multi__list" id="UNIQUE-ID-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4">
              <li class="fsa-select-multi__item">
                <input class="fsa-checkbox fsa-select-multi__check" id="irsforms_one" type="checkbox" name="irsforms_one" value="One" checked="">
                <label class="fsa-select-multi__label" for="irsforms_one">CROPS DISASTER PROGRAM</label>
              </li>
              <li class="fsa-select-multi__item">
                <input class="fsa-checkbox fsa-select-multi__check" id="irsforms_two" type="checkbox" name="irsforms_two" value="Two">
                <label class="fsa-select-multi__label" for="irsforms_two">DCP - COUNTER CYCLICAL</label>
              </li>
              <li class="fsa-select-multi__item">
                <input class="fsa-checkbox fsa-select-multi__check" id="irsforms_three" type="checkbox" name="irsforms_three" value="Three">
                <label class="fsa-select-multi__label" for="irsforms_three">DCP - DIRECT</label>
              </li>
              <li class="fsa-select-multi__item">
                <input class="fsa-checkbox fsa-select-multi__check" id="irsforms_four" type="checkbox" name="_four" value="Four">
                <label class="fsa-select-multi__label" for="irsforms_four">DIRECT PAYMENT - CORN</label>
              </li>
            </ul>
          </div>
          <span class="fsa-field__help" id="lorem-hshhsjtext-help-4">Instructional message here</span>
        </div>

        <div class="fsa-m-t--m">
          Original Principal Amount Range
        </div>
        <div class="fsa-level fsa-m-t--none">
          <span>
            <div class="fsa-field fsa-field--fill">
              <label class="fsa-field__label" for="date-picker-basic">Minimum</label>
              <span class="fsa-affix fsa-affix--fill">
                <label for="lorem-778affixs459" class="fsa-affix__prefix" aria-hidden="true" title="Dollars">$</label>
                <input placeholder="" class="fsa-input fsa-field__item fsa-affix__item" id="" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              </span>
              <span class="fsa-field__help" id="date-picker-basic__help"></span>
            </div>
          </span>
          <span>
            <div class="fsa-field">
              <label class="fsa-field__label" for="date-picker-basic">Maximum</label>
              <span class="fsa-affix fsa-affix--fill">
                <label for="lorem-778affixs459" class="fsa-affix__prefix" aria-hidden="true" title="Dollars">$</label>
                <input placeholder="" class="fsa-input fsa-field__item fsa-affix__item" id="" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
              </span>
              <span class="fsa-field__help" id="date-picker-basic__help"></span>
            </div>
          </span>
        </div>

        <div class="fsa-field">
          <label class="fsa-field__label" for="UNIQdsfsdfsD-hshhsjtex">State <span class="fsa-field__label-desc">Required</span></label>
          <select class="fsa-select fsa-field__item" id="UNIQdsfsdfsD-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4" aria-required="true" name="UNIQdsfsdfsD-hshhsjtex">
            <option value="Option A" selected="selected">State Name</option>
            <option value="Option B">State Name</option>
            <option value="Option C">State Name</option>
            <option value="Option D">State Name</option>
            <option value="Option E">State Name</option>
          </select>
          <span class="fsa-field__help" id="lorem-hshhsjtext-help-4"></span>
        </div>

        <div class="fsa-field">
          <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">County <span class="fsa-field__label-desc">Required</span></label>
          <select class="fsa-select fsa-field__item" id="UNIQUE-ID-hshhsjteCounty" aria-describedby="UNIQUE-ID-hshhsjteCounty-help-4" aria-required="true" name="UNIQUE-ID-hshhsjteCounty">
            <option value="Option A" selected="selected">County Name</option>
            <option value="Option B">County Name</option>
            <option value="Option C">County Name</option>
            <option value="Option D">County Name</option>
            <option value="Option E">County Name</option>
          </select>
          <span class="fsa-field__help" id="lorem-hshhsjtext-help-4"></span>
        </div>

        <div class="fsa-m-t--m">
          <button @click="handleViewResults(tabIrsFormsId)" class="fsa-btn fsa-btn--primary">
            <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            Search
          </button>
        </div>

      </demo-modal>
      <!-- IRS Forms Modal END -->


    </main>

    <baseFooter HIDE_RETURN_TO_TOP="true"></baseFooter>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import  { useNavigation } from '@/composables/useNavigation.js';
import { useModalControls } from '@/composables/useModalControls';
import { useUtilities } from '@/composables/useUtilities.js';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

import modal from './modals/Modal.vue';

export default {
  components: {
    baseHeader,
    baseFooter,
    demoModal: modal
  },

  setup(props){
    
    const { goto } = useNavigation();
    const {
      setModalId,
      getModalId,
      showModal,
      hideModal
    } = useModalControls();
    const {
      setPropertyFromProperty,
      getPropertyFromId } = useUtilities();


    const tabPaymentsId = ref(uuidv4());
    const tabCollectionsId = ref(uuidv4());
    const tabDebtsId = ref(uuidv4());
    const tabIrsFormsId = ref(uuidv4())
    const tabsData = ref([
      {
        id: tabPaymentsId.value,
        label: 'Payments',
        isSelected: true,
        path: '/demos/search/payment-results'
      },
      {
        id: tabCollectionsId.value,
        label: 'Collections',
        isSelected: false,
        path: '/demos/search/collections-results'
      },
      {
        id: tabDebtsId.value,
        label: 'Debts',
        isSelected: false,
        path: '/demos/search/debts-results'
      },
      {
        id: tabIrsFormsId.value,
        label: 'IRS Forms',
        isSelected: false,
        path: '/demos/search/irs-forms-results'
      },

    ])

    const paymentsData = ref([
      {
        id: uuidv4(),
        payment_date: '01/19/2016',
        ach_check_num: '5454545',
        gross_benefit: '32,405.98',
        net_payment: '32,405.98'
      },
      {
        id: uuidv4(),
        payment_date: '01/19/2016',
        ach_check_num: '54523425',
        gross_benefit: '24,900.25',
        net_payment: '24,900.25'
      }
    ])

    const collectionsData = ref([
      {
        id: uuidv4(),
        collection_date: '09/14/2016',
        program_desc: 'Counter Cyclical Payment - Peanuts',
        collection_amount: '7,208.45'
      },
      {
        id: uuidv4(),
        collection_date: '08/22/2016',
        program_desc: 'Load In Charges - Peanuts',
        collection_amount: '3,098.75'
      },
      {
        id: uuidv4(),
        collection_date: '08/24/2016',
        program_desc: 'Load In Charges - Peanuts',
        collection_amount: '7,208.45'
      },
      {
        id: uuidv4(),
        collection_date: '08/24/2016',
        program_desc: 'Non Recourse Mal - Peanuts',
        collection_amount: '7,208.45'
      },
      {
        id: uuidv4(),
        collection_date: '08/24//2016',
        program_desc: 'Non Recourse Mal - Peanut',
        collection_amount: '27,3085.51'
      }
    ]);

    const debtsData = ref([
      {
        id: uuidv4(),
        receivable_id: '213321432',
        program_desc: 'Direct Payment - Oats',
        outstanding_balance: '26.01'
      },
      {
        id: uuidv4(),
        receivable_id: '213321501',
        program_desc: 'Direct Payment - Corn',
        outstanding_balance: '2007.22'
      },
      {
        id: uuidv4(),
        receivable_id: '213321502',
        program_desc: 'Direct Payment - Sorghum',
        outstanding_balance: '14,398.48'
      },
      {
        id: uuidv4(),
        receivable_id: '213321632',
        program_desc: 'Direct Payment - Peanuts',
        outstanding_balance: '2,509.85'
      },
      {
        id: uuidv4(),
        receivable_id: '213321690',
        program_desc: 'Direct Payment - Wheat',
        outstanding_balance: '1,645.50'
      },
    ]);

    const irsFormsData = ref([
      {
        id: uuidv4(),
        tax_year: '2021',
        form_id: '1099-G',
        income: '20,782.59',
        tax_withheld: '0.00'
      },
      {
        id: uuidv4(),
        tax_year: '2020',
        form_id: '1099-G',
        income: '9,830.07',
        tax_withheld: '0.00'
      },
      {
        id: uuidv4(),
        tax_year: '2019',
        form_id: '1099-G',
        income: '34,090.10',
        tax_withheld: '0.00'
      },
      {
        id: uuidv4(),
        tax_year: '2018',
        form_id: '1099-G',
        income: '19,349.25',
        tax_withheld: '0.00'
      }
    ]);

    const handleTabSelect = (_id) => {
      let arr = tabsData.value;
      arr.forEach( item => { setPropertyFromProperty(item.id, 'id', 'isSelected', false, arr) });
      setPropertyFromProperty(_id, 'id', 'isSelected', true, arr);
    }
    const setIsSelectedContainer = (_id) => getPropertyFromId(_id, 'isSelected', tabsData.value);
    const setSelectedClass = (_boo) => { return _boo ? 'fsa-content-tabs__label--active' : ''};

    const modalDatePickerId = ref(uuidv4());

    const handleViewResults = (_id=null) => {
      if(_id) hideModal(_id+'-modal');
      goto( getPropertyFromId(_id, 'path', tabsData.value) );  
    }

    const viewAll = (_id=null) => {
      goto( getPropertyFromId(_id, 'path', tabsData.value) ); 
    }

    const showPaymentDetails = (_id) => {
      goto('demos/search/payment-details/'+_id)
    }

    return {
      goto,
      tabsData,
      tabPaymentsId,
      tabCollectionsId,
      tabDebtsId,
      tabIrsFormsId,
      paymentsData,
      showPaymentDetails,
      collectionsData,
      debtsData,
      irsFormsData,
      setIsSelectedContainer,
      setSelectedClass,
      handleTabSelect,
      handleViewResults,
      viewAll,
      showModal,
      hideModal,
      modalDatePickerId
    }
  }
}

</script>