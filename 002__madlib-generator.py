# 12/12/2019
# Learning Python

def generate_madlib():
    print('\n')
    print('This will make a small madlib')
    print('First it will ask for a few short input strings')

    pronoun = input('A pronoun: (Example: Jim)')
    verb = input('A verb: (Example: run)')
    adjective = input('An adjective: (Example: red)')
    place = input('A place: (Example: gas station)')
    language = input('A programming language: (Example: Python)')
    print(pronoun + " went " + verb + "ing to a " + adjective + " " + place + ".")

    print("After that " + pronoun + " started coding a madlib generator to help him learn"+ " " + language + ".")


generate_madlib()