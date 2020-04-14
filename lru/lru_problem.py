class lru():
    def __init__(self):
        self.lrucache = []

    def put(self, item):
        if (len(self.lrucache) == 5):
            if item in self.lrucache:
                self.lrucache.remove(item)
                self.lrucache.append(item)
                return True
            else:
                self.lrucache.pop(0)
                self.lrucache.append(item)
                return True
        else:
            if item in self.lrucache:
                self.lrucache.remove(item)
                self.lrucache.append(item)
                return True
            else:
                self.lrucache.append(item)
                return True

    def get(self, item):
        if item in self.lrucache:
            self.lrucache.remove(item)
            self.lrucache.append(item)
            return item
        else:
            return -1

    def get_cache(self):
        return self.lrucache


def main():
    l = lru()
    l.put(1)
    l.put(2)
    l.put(3)


if __name__ == '__main__':
    main()
