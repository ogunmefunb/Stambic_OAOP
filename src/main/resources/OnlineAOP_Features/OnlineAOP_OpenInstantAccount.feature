Feature: Verify that Customer can validate BVN via online account opening portal

  Scenario: Verify that user can open instant account
    Given User is on https://www.stanbicibtcbank.com/
    Then User navigates and clicks on open an instant account icon
    Then User chooses an account type between classic savings account
    Then User clicks on proceed button
    Then User inputs validation data as stated below:
          |BVN            |22222431493|
          |Day Of Birth   |01|
          |Month Of Birth |July|
          |Year Of Birth  |1991|
    Then User Accepts terms and conditions
    Then User clicks Submit button


