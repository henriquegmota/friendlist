Feature: home

  Scenario: What i like to see on the home

    Given I visit the page "/home"
    When I stay on the "/home"
    Then I should like to see a list of friends
