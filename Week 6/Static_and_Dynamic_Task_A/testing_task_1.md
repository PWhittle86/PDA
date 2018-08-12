### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')

class CardGame

  def checkforAce(card)
    if card.value = 1 #Correct code: if card.value == 1.
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #Correct code: def highest_card(card1, card2).
    if card1.value > card2.value
      return card.name #Correct code: return card1.name.
    else
      card2 #Correct code: return card2.name
    end
  end

end

def self.cards_total(cards) #Function is not within CardGame class, which is necessary for a class function.
  total
  for card in cards
    total += card.value
    return "You have a total of" + total #Correct code: "You have a total of" + total.to_s. Additionally, this should be returned outside of the for loop, where I have starred below, otherwise the loop will not apply to all cards in the array.
    .
  end
  #****************
end


```
