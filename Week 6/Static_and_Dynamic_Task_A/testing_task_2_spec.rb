require("minitest/autorun")
require("minitest/rg")

require_relative('card.rb')
require_relative("testing_task_2.rb")

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Hearts", 1)
    @card2 = Card.new("Spades", 5)
    @cardgame1 = CardGame.new()
  end

  def test_card_has_value
    assert_equal(1, @card1.value)
  end

  def test_card_has_suit
    assert_equal("Hearts", @card1.suit)
  end

  def test_check_for_ace
    assert_equal(true, @cardgame1.checkforAce(@card1))
  end

  def test_highest_card
    assert_equal("The 5 of Spades", @cardgame1.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 6", @cardgame1.cards_total([@card1, @card2]))
  end

end
