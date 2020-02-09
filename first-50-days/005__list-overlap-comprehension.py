# 12/15/2019
# Learning Python


# testing_array = make_array()
# print('our new array is: ' + str(testing_array))



# # figure out birth years if these were ages:

# birthyears_array = [2019 - x for x in testing_array]
# print('those ages would be: ' + str(birthyears_array))

# next_test = [x - 5 for x in testing_array]
# print(next_test)

# # function inside of comprehension
# def test_func(y):
#     return y / 3 - 2

# num2_array = [test_func(x) + 0.123456789 for x in testing_array]
# print('\n using func inside array: ' + str(num2_array))

# ------------------------------------------
import random

def make_new_array(length=10, max_num=20):
    new_array = []

    i = 0
    while i < length:
        new_array.append(random.randrange(1, max_num, 1))
        i += 1
    return new_array

array1 = make_new_array(170, 30)
array2 = make_new_array(200, 30)


array3 = array1 + array2
print(array3)
# for i in array3:
#     num_to_check = array3[i]
#     print(num_to_check)
#     for i in array3:
#         if(num_to_check == array3[i]):
#             print('duplicate ' + str(array3[i]))

#             # This is where I got stumped.. and it was supposed to end up in one line


# suggested solutions
array4 = [i for i in array1 if i in array2]
print(array4)

array5 = [i for i in set(array1) if i in array2]
print(array5)


# not sure how this is supposed to be better
result_overlaps = [i for i in set(array1) if i in array2]
result = [i for i in result_overlaps if result_overlaps.count(i) == 1]
print(result)