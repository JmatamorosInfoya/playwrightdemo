Feature: Playwright Demo
    Feature Description : To run a Playwright demo using homedepot Scenario Outline: 

  @demo
  Scenario: Verify homedepot page
    Given I am on 'Home Depot ' page
    Then the user waits for text "Account / Sign In" with attibute "data-title" to be visible
    Then the user accepts all cookies
    Then the user waits for page to be reloaded
    Then the user clicks on link " Select My Store "
    Then the user selects the store "7001" with language "EN"
    #Then the user waits for "3" seconds
    Then the user waits for text "Account / Sign In" with attibute "data-title" to be visible
    Then the user validates element "class" with attibute "hdca-cms-rich-text__selection--font-size--large" with text "Popular Searches" is visible
