# 1/20/2020
# Taking regex into shell

#https://www.guru99.com/linux-regular-expressions.html


# Figured out these will not work in windows 10 linux subshell without being wrapped in qoutes


# Will find all lines with an "a" in them
cat sample.txt | grep a


echo '-------1between outputs1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-------'

# Will find all lines that begin with an "a"
cat sample.txt | grep "^a"

echo '-------2between outputs2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!2-------'



# Still couldn't get these to work in the windows 10 subshell :/ but it seems like pretty normal regex


# Will find all lines that end with an "a"
cat sample.txt | grep "t$"

echo '-------3between outputs3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!3-------'

# Will find all lines with 2 "p" 's  in row (one after the other)
cat sample.txt | grep -E "p\{2}"

echo '-------4between outputs4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4-------'

# will find lines that have one or more a's with a "t" afterwards
cat sample.txt | grep "a\+t"

