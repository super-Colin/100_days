# 1/17/2020
# Trying to retain some Python knowledge

test_list = ['one_thing', 'one_thing', 'red thing',
             'two thing', 'red thing', 'blue thing', 'red thing']



def remove_duplicates(input_list):
    new_list = []

    for x in input_list:
        if x not in new_list:
            new_list.append(x)

    return new_list


print(remove_duplicates(test_list))
