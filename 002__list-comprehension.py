# 12/12/2019
# Learning Python

import random

def make_array():
    new_array = []

    i = 0
    while i < 10:
        # new_num = random.randrange(1, 99, 1)
        # new_array.append(new_num)

        new_array.append(random.randrange(1, 99, 1))

        i += 1

    return new_array



testing_array = make_array()
print('our new array is: ' + str(testing_array))



# figure out birth years if these were ages:

birthyears_array = [2019 - x for x in testing_array]
print('those ages would be: ' + str(birthyears_array))

next_test = [x - 5 for x in testing_array]
print(next_test)

# function inside of comprehension
def test_func(y):
    return y / 3 - 2

num2_array = [test_func(x) + 0.123456789 for x in testing_array]
print('\n using func inside array: ' + str(num2_array))