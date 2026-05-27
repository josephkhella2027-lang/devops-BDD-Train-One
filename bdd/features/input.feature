Feature: Input system

  Scenario: User types valid text

    Given page is opened
    When user types "Hello World" in input with id "inputText"
    And user clicks the button
    Then text should be shown on screen


  Scenario: User types empty text

    Given page is opened
    When user types "" in input with id "inputText"
    And user clicks the button
    Then text should be empty


  Scenario: Wrong input id should fail

    Given page is opened
    When user types "Hello" in input with id "wrongInput"
    Then error should be shown

  Scenario: Input must have correct class
  Given page is opened
  Then input with id "inputText" should have class "inputText"