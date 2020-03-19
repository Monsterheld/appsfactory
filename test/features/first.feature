Feature: Just a first feature
    Background:
        Given I am at the new platform
    Scenario: Click on the Mallorca travel target box and check the url
        When I am at 'https://go.ab-in-den-urlaub.de/?force-split'
        Then I click on 'mallorca' travel target box
        Then I am on the find page
