import random


# guesses = win = 0

print("Guess the number and the computer will tell you if you're too high or too low")

# Ask for upper bound number
max_num = int(input('What would you like the highest possible number to be?: '))

# Generate a random number between 0 - max_range
target_num = random.randrange(1, max_num, 1)
# print(target_num)

# Ask for a number and return whether it's high or low
def guess_the_num():
    win = False
    guesses = 0

    while win == False:
        guess = int(input('Guess: '))
        guesses += 1

        if guess < target_num:
            print('Your guess was too low')
        elif guess > target_num:
            print('Your guess was too high')
        elif guess == target_num:
            win = True


    if win == True:
        print('You Win!!!')
        print('You used ' + str(guesses) + ' guesses')

guess_the_num()