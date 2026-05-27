Feature: Header validation

  Scenario: Check div exists by id

    Given user opens the page
    Then div with id "header" should exist


  Scenario: Check div class separately

    Given user opens the page
    Then div with id "header" should exist
    Then div with id "header" should have class "headerOne"