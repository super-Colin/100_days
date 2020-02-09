# 1/6/2020
# some python math

fibonacci = [1,1]
number_to_make = input('How many fibonacci numbers would you like to generate?: ')


i = 0
while i < int(number_to_make):
    # new_num = fibonacci[-1] + fibonacci[-2]
    fibonacci.append(fibonacci[-1] + fibonacci[-2])
    print(fibonacci)
    i += 1






# fibonacci = [1,1]
# number_to_make = input('How many fibonacci numbers would you like to generate?: ')
# i = 0

# def fibonacci_func(input_list):
#     new_num = input_list[-1] + input_list[-2]
#     input_list = input_list.append(new_num)
#     print(input_list)

# while i < int(number_to_make):
#     fibonacci_func(fibonacci)
#     i += 1



