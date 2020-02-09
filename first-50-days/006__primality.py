# 12/16/2019
# Learning Python

check_var = int(input('supply a number:'))
prime = False

if check_var > 0:
    for x in range(2, check_var - 1):
        if check_var % x !=0:
            continue
        elif check_var % x == 0:
            print('number is not prime')
    print('number is prime')


