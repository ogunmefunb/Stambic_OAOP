Feature: Add To Cart

  Scenario: Verify that user can add products to cart
    Given User is on https://rahulshettyacademy.com/seleniumPractise/#/
    Then User assess GreenKart Products
    Then User adds products to cart
    |listOfProducts|
    |Cucumber|
    |Brocolli|
    |Pumpkin|
    |Orange|
    |Water Melon|
    |Pista|
    Then User checks-out selected products
    Then User clicks on Place order
    Then User selects Nigeria as Country
    Then User agrees to Terms and Conditions
    Then User clicks on proceed
