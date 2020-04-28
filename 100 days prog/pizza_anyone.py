import sys
lst = []
flag = False

for line in sys.stdin:
    line = line.strip()
    if(line == '.'):
        if(flag):
            print("No pizza can satisfy these requests.")
        else:
            Topping = []
            for i in lst:
                for j in range(0, len(i), 2):
                    if(i[j] == '-'):
                        if(i[j+1] in Topping):
                            Topping.remove(i[j+1])
                    else:
                        if(i[j+1] not in Topping):
                            Topping.append(i[j+1])
            Topping.sort()
            Toppings = ""
            Toppings = Toppings.join(Topping)
            print("Toppings:", Toppings)

        lst = []
        flag = False
    else:
        temp = line[:-1]
        if(len(temp) == 2):
            if(temp[0] == '-'):
                check = '+'+temp[1]
            else:
                check = '-'+temp[1]
            if(check in lst):
                flag = True
            lst.append(temp)
        else:
            lst.append(line[:-1])
