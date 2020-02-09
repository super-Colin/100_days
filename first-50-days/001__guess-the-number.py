# 12/11/2019
# Learning Python

import random

print("Guess the number and the computer will tell you if you're too high or too low")

max_num = int(input('What would you like the highest possible number to be?: '))

target_num = random.randrange(1, max_num, 1)

def guess_the_num():
    win = False
    guesses = 0

    quit_loop = False
    while quit_loop == False:
        guess = input('Guess: ')
        guesses += 1

        try:
            guessed_num = int(guess)
        except:
            guessed_num = 'null'


        if guess == "quit":
            print('Thanks For Playing!')
            quit_loop = True

        elif guessed_num == 'null':
            print('Enter a number or type "quit"')

        elif guessed_num > target_num:
            print('Your guess was too high')

        elif guessed_num < target_num:
            print('Your guess was too low')

        elif guessed_num == target_num:
            win = True
            quit_loop = True

        else:
            print('...What happened... Please enter a number or type "quit"')
            
    # / while

    if win == True:
        print('You Win!!!')
        print('You used ' + str(guesses) + ' guesses')

guess_the_num()