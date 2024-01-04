Feature: Playwright Demo PIP
    Feature Description : To run a Playwright demo using homedepot Scenario Outline: 

  @demo @test
  Scenario: Verify pip page
    Given I am on 'Home Depot ' page
    Then the user waits for text "Account / Sign In" with attibute "data-title" to be visible
    Then the user accepts all cookies
    Then the user waits for page to be reloaded
    Then the user clicks on link " Select My Store "
    Then the user selects the store "7001" with language "EN"
    Then the user waits for text "Account / Sign In" with attibute "data-title" to be visible
    Then the user validates element "class" with attibute "hdca-cms-rich-text__selection--font-size--large" has text "Popular Searches"
    Then the user search for a product using sku "1000666163"
  #  Then the user waits for "10" seconds
    Then the user waits for text " Delivery " to be visible
    Then the user validates if text "Add To Cart" is visible
