from lru_problem import lru


def main():
    testobj = lru()
    assert testobj.put(1) == True
    assert testobj.put(2) == True
    assert testobj.put(3) == True
    assert [1, 2, 3] == testobj.get_cache()
    assert testobj.get(1) == 1
    assert [2, 3, 1] == testobj.get_cache()
    assert testobj.put(4) == True
    assert testobj.put(5) == True
    assert [2, 3, 1, 4, 5] == testobj.get_cache()
    assert testobj.put(1) == True
    assert [2, 3, 4, 5, 1] == testobj.get_cache()
    print("All Test Cases Passed")


if __name__ == '__main__':
    main()
