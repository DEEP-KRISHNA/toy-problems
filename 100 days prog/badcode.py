import sys
gate = True
finalcounter = 0


def recfunc(a, b, pos, final):
    # print(a)
    # print(b)
    # print(pos)
    # print(final)
    # print()
    if(a == b):
        if(final not in finallist):
            finallist.append(final)
    else:
        if(pos < (len(b))):
            if((b[pos] == '0') and (len(b) != pos+1)):
                recfunc(a+'0', b, pos+1, final)
            else:
                if(b[pos] in keys):
                    recfunc(a+b[pos], b, pos+1, final+dic[b[pos]])
        if(pos+2 <= len(b)):
            if(b[pos:pos+2] == '00' and (len(b) != pos+2)):
                recfunc(a+'00', b, pos+2, final)
            else:
                if(b[pos:pos+2].find('0') == 1):
                    tempp = int(b[pos:pos+2])
                    temp = str(tempp)
                    if(temp in keys):
                        recfunc(a+b[pos:pos+2], b, pos+2, final+dic[temp])
                else:
                    if(b[pos:pos+2] in keys):
                        recfunc(a+b[pos:pos+2], b, pos+2,
                                final+dic[b[pos:pos+2]])


for line in sys.stdin:
    line = line.strip()
    if(gate):
        counter = int(line)
        gate = False
        count = 0
        dic = {}
        finallist = []
    else:
        count += 1
        if(count == counter+1):
            gate = True
            # print(dic)
            # print(line)
            keys = dic.keys()
            if(line[0] == '0'):
                recfunc('0', line, 1, '')
            else:
                if(line[0] in keys):
                    recfunc(line[0], line, 1, dic[line[0]])
            if(line[0:2] == '00'):
                recfunc('00', line, 2, '')
            else:
                if(line[0:2].find('0') == 1):
                    tempp = int(line[0:2])
                    temp = str(tempp)
                    if(temp in keys):
                        # print(temp,line,2,dic[temp])
                        recfunc(line[0:2], line, 2, dic[temp])
                else:
                    if(line[0:2] in keys):
                        recfunc(line[0:2], line, 2, dic[line[0:2]])
            finalcounter += 1
            print("Case #"+str(finalcounter))
            finallist.sort()
            # print(finallist)
            for s in finallist:
                print(s)
            print()
        else:
            split = line.split()
            dic[split[1]] = split[0]
